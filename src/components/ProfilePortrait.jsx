import { useEffect, useRef } from 'react';
import { profile } from '../profile';

export default function ProfilePortrait() {
  const frame = useRef(null);
  const card = useRef(null);
  const photo = useRef(null);
  const rotation = useRef(null);

  const rotatePhoto = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (rotation.current?.playState === 'running') return;
    rotation.current = photo.current.animate(
      [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(360deg)' }],
      { duration: 1400, easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)' },
    );
  };

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const stop = () => rotation.current?.cancel();
    media.addEventListener('change', stop);
    return () => {
      stop();
      media.removeEventListener('change', stop);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const section = frame.current.closest('section');
    let animation = 0;
    let next;
    const update = () => {
      animation = 0;
      card.current.style.setProperty('--rotate-x', `${-next.y * 12}deg`);
      card.current.style.setProperty('--rotate-y', `${next.x * 12}deg`);
      card.current.style.setProperty('--glare-x', `${50 + next.x * 40}%`);
      card.current.style.setProperty('--glare-y', `${50 + next.y * 40}%`);
      card.current.style.setProperty('--glare-opacity', '1');
    };
    const move = (event) => {
      if (!media.matches || event.pointerType === 'touch') return;
      const rect = frame.current.getBoundingClientRect();
      const clamp = value => Math.max(-1, Math.min(1, value));
      next = {
        x: clamp((event.clientX - rect.left - rect.width / 2) / (rect.width / 2)),
        y: clamp((event.clientY - rect.top - rect.height / 2) / (rect.height / 2)),
      };
      if (!animation) animation = requestAnimationFrame(update);
    };
    const reset = () => {
      cancelAnimationFrame(animation);
      animation = 0;
      card.current.style.setProperty('--rotate-x', '0deg');
      card.current.style.setProperty('--rotate-y', '0deg');
      card.current.style.setProperty('--glare-opacity', '0');
    };
    section.addEventListener('pointermove', move, { passive: true });
    section.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    media.addEventListener('change', reset);
    return () => {
      cancelAnimationFrame(animation);
      section.removeEventListener('pointermove', move);
      section.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset);
      media.removeEventListener('change', reset);
    };
  }, []);

  return (
    <div ref={frame} className="portrait-perspective">
      <div ref={card} className="portrait-card">
        <button
          ref={photo}
          type="button"
          aria-label="Rotate profile photo"
          title="Hover or click to rotate"
          onPointerEnter={event => { if (event.pointerType === 'mouse') rotatePhoto(); }}
          onClick={rotatePhoto}
          className="portrait-spin relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-red-600/30 bg-[#141414] p-3 text-left shadow-[0_20px_70px_rgba(229,9,20,0.12)]"
        >
          <img src={profile.portrait} alt={`${profile.name} portrait`} width="1098" height="1433" fetchPriority="high" decoding="async" className="aspect-[3/4] w-full rounded-xl object-cover" />
          <span className="absolute left-6 top-6 rounded bg-red-600 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-white shadow-lg">FEATURED DEV</span>
          <span className="portrait-glare" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
