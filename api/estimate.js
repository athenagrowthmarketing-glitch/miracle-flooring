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

    // Verify token with Google reCAPTCHA v3
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

    // Lead payload
    const leadPayload = {
      name,
      phone,
      zip,
      service: service || 'Hardwood Installation',
      sqft: sqft || 'Not specified',
      notes: notes || '',
      source: 'Miracle Flooring Website',
      submittedAt: new Date().toISOString(),
      recaptchaScore,
    };

    console.log('[Miracle Flooring Lead Received]', leadPayload);

    return res.status(200).json({
      success: true,
      message: 'Estimate request received successfully.',
    });
  } catch (error) {
    console.error('Error processing estimate request:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please call (470) 353-6909 directly.',
    });
  }
}
