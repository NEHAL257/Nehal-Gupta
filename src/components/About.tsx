import React from 'react';
import { FileText, ArrowRight, Compass, Target, Code, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface AboutProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenResume }) => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 mb-2">
            Overview
          </p>
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* 2-Column Split: Visual Workspace + Bio details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Workspace image with caption & ethos */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0E1118] shadow-xl group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={profile.workspaceImageUrl}
                  alt="Minimalist engineering workspace setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-mono text-indigo-300">Workspace & Studio</p>
                  <p className="text-sm font-medium text-white">{profile.location || 'Bangalore, India'}</p>
                </div>
              </div>

              {/* Guiding Principles Card */}
              <div className="p-6 border-t border-white/[0.06]">
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono text-xs mb-3 text-indigo-400">
                  Engineering Philosophy
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Speed is a primary feature: sub-100ms response targets</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Radical accessibility and keyboard-first navigability</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Resilient distributed architecture designed for maintainability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Areas of Specialization */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
              {profile.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Career Goals */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.07] mt-2">
              <div className="flex items-center gap-2 text-indigo-400 mb-2">
                <Target className="w-4 h-4" />
                <h4 className="text-sm font-semibold text-slate-200">Career Focus & Goals</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {profile.careerGoals}
              </p>
            </div>

            {/* Specialization Areas (Zero-Pill: clean unboxed text with subtle dividers) */}
            <div>
              <p className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                Focus Areas & Interests
              </p>
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-slate-300">
                {profile.interests.map((interest, idx) => (
                  <React.Fragment key={idx}>
                    <span className="hover:text-indigo-300 transition-colors py-0.5 font-medium">
                      {interest}
                    </span>
                    {idx < profile.interests.length - 1 && (
                      <span aria-hidden="true" className="mx-2.5 text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
