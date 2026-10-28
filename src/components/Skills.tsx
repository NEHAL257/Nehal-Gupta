import React, { useState, useMemo } from 'react';
import {
  Code2,
  FileCode2,
  Palette,
  Sparkles,
  Layout,
  Server,
  Terminal,
  Cpu,
  Network,
  Figma,
  Layers,
  Eye,
  Database,
  Zap,
  HardDrive,
  GitBranch,
  Box,
  Wrench,
  Search,
} from 'lucide-react';
import { SkillItem } from '../types/portfolio';

interface SkillsProps {
  skills: SkillItem[];
}

const iconMap: Record<string, React.ElementType> = {
  Code2,
  FileCode2,
  Palette,
  Sparkles,
  Layout,
  Server,
  Terminal,
  Cpu,
  Network,
  Figma,
  Layers,
  Eye,
  Database,
  Zap,
  HardDrive,
  GitBranch,
  Box,
  Wrench,
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Frontend', 'Backend', 'Languages', 'UI/UX Design', 'Databases', 'Tools & DevOps'];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 mb-2">
              Capabilities
            </p>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-sm text-slate-400 mt-2 font-light">
              Core stack utilized across production infrastructure, client interfaces, and systems engineering.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-white/[0.08] rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Functional Segmented Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/30 border border-white/[0.05] rounded-xl">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-indigo-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredSkills.map((skill) => {
              const IconComponent = (skill.iconName && iconMap[skill.iconName]) || Code2;
              return (
                <div
                  key={skill.name}
                  className="p-5 rounded-xl bg-[#0E1118]/80 border border-white/[0.06] hover:border-white/[0.14] transition-all hover:-translate-y-0.5 duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="font-medium text-sm text-slate-100 group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Clean unboxed proficiency metadata */}
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {skill.description}
                    </p>
                  </div>

                  {/* Category breadcrumb */}
                  <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{skill.category}</span>
                    <span className="text-indigo-400/80 group-hover:text-indigo-300 transition-colors">
                      Production Ready
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
