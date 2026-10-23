export default async function handler(req, res) {
  // CORS & Method check
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, phone, zip, service, sqft, notes, token } = req.body || {};

    if (!name || !phone || !zip) {
      return res.status(400).json({ success: false, message: 'Name, phone, and ZIP code are required.' });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    let recaptchaScore = null;

    // Verify token with Google reCAPTCHA v3 if secret key is present
    if (secretKey && token) {
      try {
        const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
        const response = await fetch(verifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: secretKey,
            response: token,
          }),
        });

        const data = await response.json();
        recaptchaScore = data.score;

        if (!data.success || (data.score !== undefined && data.score < 0.3)) {
          return res.status(400).json({
            success: false,
            message: 'reCAPTCHA verification failed. Please call (470) 353-6909 directly.',
            score: data.score,
          });
        }
      } catch (recaptchaErr) {
        console.warn('reCAPTCHA verification network error:', recaptchaErr);
      }
    }

    // Split name for CRM field compatibility
    const trimmedName = (name || '').trim();
    const nameParts = trimmedName.split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Lead payload formatted for LeadConnector / HighLevel CRM
    const leadPayload = {
      name: trimmedName,
      full_name: trimmedName,
      first_name: firstName,
      last_name: lastName,
      phone: (phone || '').trim(),
      postal_code: (zip || '').trim(),
      zip: (zip || '').trim(),
      service: service || 'Hardwood Installation',
      project_type: service || 'Hardwood Installation',
      sqft: sqft || 'Not specified',
      area_sqft: sqft || 'Not specified',
      notes: notes || '',
      message: notes || '',
      source: 'Miracle Flooring Website',
      tags: ['Website Lead', 'In-Home Estimate', service || 'Hardwood Installation'],
      submittedAt: new Date().toISOString(),
      recaptchaScore,
    };

    console.log('[Miracle Flooring Lead Received]', leadPayload);

    // Forward to LeadConnector Webhook
    const webhookUrl = process.env.LEADCONNECTOR_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/ymHBPWR9QqVwcDPyBUn1/webhook-trigger/NEXjZfDUurVXM4Qr6MtV';

    let webhookDelivered = false;
    try {
      const hookRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Miracle-Flooring-Website/1.0',
        },
        body: JSON.stringify(leadPayload),
      });

      const hookText = await hookRes.text();
      webhookDelivered = hookRes.ok;
      console.log('[LeadConnector Webhook Result]', hookRes.status, hookText);
    } catch (hookErr) {
      console.error('[LeadConnector Webhook Delivery Error]', hookErr);
    }

    return res.status(200).json({
      success: true,
      message: 'Estimate request received successfully.',
      webhookDelivered,
    });
  } catch (error) {
    console.error('Error processing estimate request:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please call (470) 353-6909 directly.',
    });
  }
}
