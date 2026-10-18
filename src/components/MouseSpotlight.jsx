import { useEffect, useRef } from 'react';

export default function MouseSpotlight() {
  const spotlight = useRef(null);
  const pointer = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const element = spotlight.current;
    let frame = 0;
    let position;
    let target;

    const animate = () => {
      position.x += (target.x - position.x) * 0.18;
      position.y += (target.y - position.y) * 0.18;
      pointer.current.style.transform = `translate3d(${position.x - 24}px, ${position.y - 24}px, 0)`;
      element.style.transform = `translate3d(${position.x - 320}px, ${position.y - 320}px, 0)`;
      if (Math.abs(target.x - position.x) + Math.abs(target.y - position.y) > 0.2) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };
    const move = (event) => {
      if (!media.matches || event.pointerType === 'touch') return;
      target = { x: event.clientX, y: event.clientY };
      position ??= { ...target };
      element.style.opacity = '1';
      pointer.current.style.opacity = '1';
      if (!frame) frame = requestAnimationFrame(animate);
    };
    const hide = () => {
      element.style.opacity = '0';
      pointer.current.style.opacity = '0';
      cancelAnimationFrame(frame);
      frame = 0;
      position = undefined;
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    media.addEventListener('change', hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      media.removeEventListener('change', hide);
    };
  }, []);

  return <>
    <div ref={spotlight} className="mouse-spotlight" aria-hidden="true" />
    <div ref={pointer} className="light-pointer" aria-hidden="true" />
  </>;
}
