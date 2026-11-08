import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Language } from '../types';

export const tr = (lang: Language, ar: string, en: string) => (lang === 'ar' ? ar : en);

/** Fade + rise when scrolled into view. Starts visible if reduced motion is on. */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}> = ({ children, delay = 0, y = 24, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/** Word-by-word "being written" reveal. Word-level so Arabic letter joining stays intact. */
export const WordReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}> = ({ text, className = '', delay = 0, stagger = 0.06, immediate = false }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const go = immediate || inView;
  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          style={{ marginInlineEnd: '0.28em' }}
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={go ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
          transition={{ duration: 0.55, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
};

export const Counter: React.FC<{ to: number; suffix?: string; duration?: number }> = ({
  to,
  suffix = '',
  duration = 1.6,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {v.toLocaleString('en-US')}
      {suffix}
    </span>
  );
};

/** Steps 0..n-1 advancing every `ms` while the element is on screen. */
export function useStepLoop(n: number, ms: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-15% 0px -15% 0px' });
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (!inView || paused) return;
    const id = setInterval(() => setStep((s) => (s + 1) % n), ms);
    return () => clearInterval(id);
  }, [inView, paused, n, ms]);
  const pick = (i: number) => {
    setStep(i);
    setPaused(true);
  };
  return { ref, step, pick };
}

export function useIsDesktop(min = 1024) {
  const [d, setD] = useState(() => (typeof window === 'undefined' ? true : window.innerWidth >= min));
  useEffect(() => {
    const m = window.matchMedia(`(min-width:${min}px)`);
    const on = () => setD(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, [min]);
  return d;
}

export const PhoneFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div
    className={`relative mx-auto w-[250px] h-[510px] rounded-[2.6rem] border-[9px] border-[#0A2540] bg-white shadow-[0_30px_60px_-20px_rgba(10,37,64,0.45)] overflow-hidden ${className}`}
  >
    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-[#0A2540] z-10" />
    <div className="h-full pt-7 bg-[#F2F7FC]">{children}</div>
  </div>
);

export const BrowserFrame: React.FC<{ children: React.ReactNode; title?: string }> = ({
  children,
  title = 'MADAR ERP',
}) => (
  <div className="rounded-2xl border border-[#CDE2F5] bg-white shadow-[0_30px_60px_-25px_rgba(10,37,64,0.35)] overflow-hidden" dir="ltr">
    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#EBF4FC] border-b border-[#CDE2F5]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
      <span className="ms-3 text-[11px] font-semibold text-[#526E8C]">{title}</span>
    </div>
    {children}
  </div>
);

export const SectionEyebrow: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = '#0066FF',
}) => (
  <span className="text-xs font-bold tracking-wide" style={{ color }}>
    {children}
  </span>
);
