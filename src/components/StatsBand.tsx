import React from 'react';
import { Language } from '../types';
import { Counter, Reveal, tr } from './ui';
import { SITE_CONFIG } from '../config';

export const StatsBand: React.FC<{ lang: Language }> = ({ lang }) => {
  const stats = [
    { n: 11, ar: 'وحدة مفتوحة في التجربة', en: 'modules open in the trial' },
    { n: SITE_CONFIG.downloads.trialDurationDays, ar: 'أيام تجربة مجانية', en: 'free trial days' },
    { n: 2, ar: 'منصتين: ويندوز وأندرويد', en: 'platforms: Windows and Android' },
    { n: 2, ar: 'وضعين: فاتح وداكن', en: 'themes: light and dark' },
  ];
  return (
    <section id="numbers" className="py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A2540] leading-tight">
            {tr(lang, 'جرّب كل حاجة قبل ما تقرر', 'Try everything before you decide')}
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-6xl sm:text-7xl font-black text-[#0066FF] tabular-nums leading-none">
                <Counter to={s.n} />
              </p>
              <p className="mt-3 text-[#526E8C] font-semibold">{tr(lang, s.ar, s.en)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
