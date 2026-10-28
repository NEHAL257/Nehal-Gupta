import React from 'react';
import { Award, Quote, CheckCircle2 } from 'lucide-react';
import { AchievementItem, TestimonialItem } from '../types/portfolio';

interface AchievementsProps {
  achievements: AchievementItem[];
  testimonials: TestimonialItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({
  achievements,
  testimonials,
}) => {
  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements Sub-Section */}
        <div className="mb-20">
          <div className="max-w-xl mb-12">
            <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 mb-2">
              Recognition & Credentials
            </p>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Honors & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-[#0E1118] border border-white/[0.06] hover:border-white/[0.14] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] font-bold text-base text-white mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-indigo-300 font-mono mb-3">
                    {item.issuer}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {item.badgeText && (
                  <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.badgeText}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Sub-Section */}
        <div>
          <div className="max-w-xl mb-12">
            <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 mb-2">
              Peer Recommendations
            </p>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight">
              What Colleagues Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="p-7 rounded-2xl bg-[#0E1118] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-indigo-500/40 mb-4" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-light">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-700 to-indigo-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-light">
                      {test.role} · {test.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
