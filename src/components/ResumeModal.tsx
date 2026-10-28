import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, Check } from 'lucide-react';
import { ProfileData, ExperienceItem, SkillItem } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  experience: ExperienceItem[];
  skills: SkillItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experience,
  skills,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0E1118] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0A0D13]">
          <div className="flex items-center gap-2">
            <span className="font-['Outfit'] font-bold text-white text-base">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs font-mono text-indigo-400">· {profile.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#0A0C11] text-slate-200 space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 id="resume-title" className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-white">
                {profile.name}
              </h1>
              <p className="text-sm font-medium text-indigo-400 mt-1">
                {profile.title}
              </p>
            </div>

            <div className="text-xs text-slate-400 space-y-1 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-slate-500" />
                <span>{profile.email}</span>
              </div>
              {profile.socials.website && (
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-slate-500" />
                  <span>{profile.socials.website}</span>
                </div>
              )}
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-400 mb-2">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {profile.shortBio} {profile.fullBio[0]}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-400 mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experience
                .filter((e) => e.type === 'experience')
                .map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                      <div>
                        <strong className="text-sm text-white font-medium">{exp.roleOrDegree}</strong>
                        <span className="text-slate-400"> — {exp.organization}</span>
                      </div>
                      <span className="font-mono text-slate-500">
                        {exp.startDate} – {exp.endDate} | {exp.location}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-light">{exp.description}</p>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-400 mb-3">
              Education
            </h2>
            {experience
              .filter((e) => e.type === 'education')
              .map((edu) => (
                <div key={edu.id} className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <div>
                      <strong className="text-white">{edu.roleOrDegree}</strong>
                      <span className="text-slate-400"> — {edu.organization}</span>
                    </div>
                    <span className="font-mono text-slate-500">{edu.startDate} – {edu.endDate}</span>
                  </div>
                  <p className="text-slate-400 font-light">{edu.description}</p>
                </div>
              ))}
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-400 mb-3">
              Technical Proficiencies
            </h2>
            <div className="flex flex-wrap gap-y-1.5 text-xs text-slate-300 font-mono">
              {skills.map((skill, index) => (
                <React.Fragment key={skill.name}>
                  <span className="text-slate-200">{skill.name}</span>
                  {index < skills.length - 1 && (
                    <span className="mx-2 text-slate-700">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0A0D13] flex items-center justify-between text-xs text-slate-400">
          <span>Configured via portfolioData.ts</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
