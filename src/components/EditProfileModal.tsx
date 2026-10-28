import React, { useState } from 'react';
import { X, Check, Copy, SlidersHorizontal, Sparkles, RefreshCw } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { INITIAL_PROFILE } from '../data/portfolioData';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (updated: ProfileData) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      socials: { ...prev.socials, [key]: value },
    }));
  };

  const handleApply = () => {
    onUpdateProfile(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(INITIAL_PROFILE);
    onUpdateProfile(INITIAL_PROFILE);
  };

  const handleCopyCode = () => {
    const codeSnippet = `export const INITIAL_PROFILE: ProfileData = ${JSON.stringify(
      formData,
      null,
      2
    )};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#0E1118] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0A0D13]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
            <span className="font-['Outfit'] font-bold text-white text-base">
              Customize Portfolio Placeholders
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-xs">
          <p className="text-slate-400 leading-relaxed font-light">
            Edit your details below to see live updates instantly throughout the entire site. All changes take effect immediately in the preview.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Name [YOUR NAME]
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Professional Title [YOUR PROFESSION]
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-300 mb-1">
              Personal Tagline [YOUR PERSONAL TAGLINE]
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Location [YOUR CITY]
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Email [YOUR EMAIL]
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                GitHub Profile URL
              </label>
              <input
                type="text"
                value={formData.socials.github || ''}
                onChange={(e) => handleSocialChange('github', e.target.value)}
                className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-300 mb-1">
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                value={formData.socials.linkedin || ''}
                onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-300 mb-1">
              Short Bio (Hero)
            </label>
            <textarea
              rows={2}
              value={formData.shortBio}
              onChange={(e) => handleChange('shortBio', e.target.value)}
              className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-300 mb-1">
              Career Goals (About Section)
            </label>
            <textarea
              rows={2}
              value={formData.careerGoals}
              onChange={(e) => handleChange('careerGoals', e.target.value)}
              className="w-full px-3 py-2 bg-[#090A0F] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0A0D13] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-transparent hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-indigo-300 bg-indigo-950/40 border border-indigo-500/20 rounded-lg hover:bg-indigo-900/40 transition-colors"
              title="Copy TypeScript snippet for src/data/portfolioData.ts"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied Snippet!' : 'Export Code'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
            >
              Apply Live Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
