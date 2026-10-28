import React, { useState, useMemo } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  items: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => {
  const [filterType, setFilterType] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = useMemo(() => {
    if (filterType === 'all') return items;
    return items.filter((item) => item.type === filterType);
  }, [items, filterType]);

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 mb-2">
              Career Trajectory
            </p>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Experience & Education
            </h2>
            <p className="text-sm text-slate-400 mt-2 font-light">
              Chronological milestones across engineering roles, systems leadership, and formal education.
            </p>
          </div>

          {/* Segmented Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-white/[0.08] rounded-lg shrink-0">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterType === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilterType('experience')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterType === 'experience'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setFilterType('education')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterType === 'education'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 border-l border-white/[0.1] space-y-12 ml-2 md:ml-4">
          {filteredItems.map((item) => {
            const isEdu = item.type === 'education';
            const Icon = isEdu ? GraduationCap : Briefcase;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#08090D] border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-indigo-400 transition-all">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-xl bg-[#0E1118] border border-white/[0.06] hover:border-white/[0.14] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-['Outfit'] font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
                        {item.roleOrDegree}
                      </h3>
                      <p className="text-sm font-medium text-slate-300">
                        {item.organization}
                      </p>
                    </div>

                    {/* Clean unboxed date and location */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {item.startDate} – {item.endDate}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bulleted List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-2 mb-4 pt-2 border-t border-white/[0.04]">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies Used (if any) */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="pt-2 border-t border-white/[0.04] flex flex-wrap items-center gap-y-1 text-xs text-slate-400 font-mono">
                      <span className="text-[11px] text-slate-500 mr-2">Technologies:</span>
                      {item.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="text-indigo-300">{tech}</span>
                          {idx < item.technologies!.length - 1 && (
                            <span aria-hidden="true" className="mx-2 text-slate-700">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
