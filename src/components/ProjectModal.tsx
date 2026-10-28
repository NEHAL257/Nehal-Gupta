import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onTriggerDemoLink: (url: string, title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onTriggerDemoLink,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0E1118] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0A0D13]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Visual Preview */}
          <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-black/50 aspect-video">
            <img
              src={project.thumbnailUrl}
              alt={`${project.title} interface preview`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Tagline */}
          <div>
            <h2
              id="modal-project-title"
              className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-white mb-2"
            >
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {project.tagline}
            </p>
          </div>

          {/* Technologies Used (Clean unboxed metadata) */}
          <div>
            <h3 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2.5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-slate-200">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-indigo-300 font-medium">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="mx-2.5 text-slate-600">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Overview, Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
              <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider font-mono">
                The Engineering Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                The Architectural Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact Metrics */}
          <div>
            <h3 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-3">
              Key Metrics & Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.impactMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-indigo-950/20 border border-indigo-500/20 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Overview Description */}
          <div className="pt-2 border-t border-white/[0.06]">
            <h3 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2">
              Detailed Scope
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-[#0A0D13]">
          <span className="text-xs text-slate-500 font-mono">
            ID: {project.id}
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <button
                onClick={() => onTriggerDemoLink(project.githubUrl!, `${project.title} (Source Code)`)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </button>
            )}

            {project.demoUrl && (
              <button
                onClick={() => onTriggerDemoLink(project.demoUrl!, `${project.title} (Live Demo)`)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
              >
                <span>Live Demonstration</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
