import React, { useEffect } from 'react';
import { X, ExternalLink, Code2, AlertCircle } from 'lucide-react';

interface DemoLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export const DemoLinkModal: React.FC<DemoLinkModalProps> = ({
  isOpen,
  onClose,
  url,
  title,
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

  const isInternalPlaceholder = url.includes('.internal') || url.includes('example/');

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#0E1118] border border-white/[0.12] rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-indigo-400" />
            <h4 className="font-['Outfit'] font-bold text-base text-white">
              Project Link Status
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-1">{title}</p>
          <p className="text-xs font-mono text-slate-400 break-all bg-black/40 p-2 rounded border border-white/[0.06]">
            {url}
          </p>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-light">
          {isInternalPlaceholder
            ? 'This project uses a configurable demonstration endpoint. To link your own deployed web application or repository, update the `demoUrl` or `githubUrl` in `src/data/portfolioData.ts`.'
            : 'You are navigating to an external live destination.'}
        </p>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Got It
          </button>
          {!isInternalPlaceholder && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
            >
              <span>Visit URL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
