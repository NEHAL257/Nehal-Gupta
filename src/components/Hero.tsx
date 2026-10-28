import React from 'react';
import {
  ArrowRight,
  FileText,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-900/20 via-violet-900/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Clean Location / Availability Status (Unboxed text with bullet separator) */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6 tracking-wide">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {profile.location || '[YOUR CITY]'}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-indigo-400">Available for select projects</span>
            </div>

            {/* Greeting & Name */}
            <h1 className="font-['Outfit'] font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-4 text-balance">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                {profile.name || '[YOUR NAME]'}
              </span>
              .
            </h1>

            {/* Professional Title */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-indigo-400 mb-4 tracking-tight">
              {profile.title || '[YOUR PROFESSIONAL TITLE]'}
            </h2>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-5 max-w-2xl">
              {profile.tagline ||
                'Building digital experiences that combine creativity, functionality, and performance.'}
            </p>

            {/* Editable Short Bio */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl font-light">
              {profile.shortBio}
            </p>

            {/* 3 Functional Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35 transition-all group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors group"
              >
                <FileText className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-white/[0.05] border border-white/10 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Media Link Icons with Accessible Titles */}
            <div className="flex items-center gap-4 text-slate-400 pt-2 border-t border-white/[0.06] w-full max-w-md">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect</span>
              <div className="flex items-center gap-3">
                {profile.socials.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-md transition-colors"
                    aria-label="GitHub profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {profile.socials.linkedin && (
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-white/[0.06] rounded-md transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {profile.socials.twitter && (
                  <a
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-sky-400 hover:bg-white/[0.06] rounded-md transition-colors"
                    aria-label="Twitter profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-md transition-colors"
                    aria-label="Direct email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer soft glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-violet-600/20 rounded-2xl blur-xl -z-10" />

              {/* Main portrait container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0E1118] shadow-2xl shadow-black/80 aspect-square">
                <img
                  src={profile.avatarUrl}
                  alt={`${profile.name || 'Developer'} professional portrait`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Subtle scrim for bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between">
                  <div>
                    <p className="text-white font-['Outfit'] font-semibold text-sm tracking-tight">
                      {profile.name || '[YOUR NAME]'}
                    </p>
                    <p className="text-xs text-slate-300 font-light truncate max-w-[220px]">
                      {profile.title || '[YOUR PROFESSION]'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs text-indigo-300 font-medium font-mono tabular-nums">
                      <span>Live Portfolio</span>
                      <ExternalLink className="w-3 h-3 text-indigo-400" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric Proof Strip Below Hero Split */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {profile.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight tabular-nums font-mono">
                  {metric.value}
                </span>
                <span className="text-sm font-medium text-slate-200 mt-1">
                  {metric.label}
                </span>
                {metric.caption && (
                  <span className="text-xs text-slate-500 mt-0.5 font-light">
                    {metric.caption}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
