import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, ArrowRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenEstimate: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenEstimate }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-brand-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-brand-oak bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Visible Craftsmanship Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
              Don't Cover a Great Floor. <span className="italic text-brand-oak">Bring It Back.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Old, scratched, or yellowed hardwood doesn’t need to be sent to a landfill. Our multi-stage dust-controlled sanding and commercial-grade finishing restores original warmth at a fraction of replacement cost.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onOpenEstimate}
              className="bg-brand-red hover:bg-brand-redHover text-white px-6 py-3.5 rounded font-semibold text-sm transition-all duration-200 shadow-md flex items-center space-x-2"
            >
              <span>Get Refinishing Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/15 cursor-ew-resize select-none touch-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <img
              src="/images/site_img_01.jpg"
              alt="After Refinishing - Miracle Flooring"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-brand-navy/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20 z-10">
              After: Restored Satin Hardwood
            </div>

            {/* Before Image (Clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/site_img_06.jpg"
                alt="Before Refinishing - Worn Hardwood"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                }}
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20 z-10">
                Before: Worn & Scratched
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full shadow-elevated flex items-center justify-center text-brand-navy border-2 border-brand-red">
                <MoveHorizontal className="w-5 h-5 text-brand-navy" />
              </div>
            </div>
          </div>

          {/* Slider Instruction Bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 px-2 space-y-2 sm:space-y-0">
            <span className="flex items-center space-x-2">
              <MoveHorizontal className="w-4 h-4 text-brand-oak" />
              <span>Drag slider left or right to inspect the transformation</span>
            </span>
            <span>Project: East Cobb, GA • Solid Red Oak Floor Restoration</span>
          </div>
        </div>

      </div>
    </section>
  );
};
