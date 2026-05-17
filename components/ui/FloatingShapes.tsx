'use client';

/* Decorative background shapes — light orange gradient bubbles, very subtle */
export default function FloatingShapes() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="orb orb-a w-[420px] h-[420px] -top-32 -right-24 animate-floatSlow" />
      <div className="orb orb-b w-[320px] h-[320px] top-1/3 -left-20 animate-floatSlow [animation-delay:-6s]" />
      <div className="orb orb-a w-[260px] h-[260px] bottom-0 right-1/4 animate-floatSlow [animation-delay:-3s]" />
    </div>
  );
}
