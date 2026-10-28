import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ArrowUpRight, Search, Eye } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onTriggerDemoLink: (url: string, title: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onSelectProject,
  onTriggerDemoLink,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Web Applications', 'Mobile Apps', 'Design Systems', 'Cloud & Tools'];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 mb-2">
              Portfolio
            </p>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 font-light">
              Selected production applications, design systems, and developer platforms.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by keyword or stack..."
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

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
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

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/30 border border-white/[0.05] rounded-xl">
            <p className="text-slate-400 text-sm">No projects match your query "{searchQuery}"</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-[#0E1118] border border-white/[0.07] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/60"
              >
                <div>
                  {/* Thumbnail Container with Hover Zoom & Quick View */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative aspect-[16/9] overflow-hidden bg-black/40 cursor-pointer"
                  >
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1118] via-transparent to-black/20 opacity-90 group-hover:opacity-75 transition-opacity" />

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-xl">
                        <Eye className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Inspect Case Study</span>
                      </span>
                    </div>

                    {/* Category & Year Ribbon */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                      <span className="font-mono text-[11px] text-slate-300 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
                        {project.category}
                      </span>
                      <span className="font-mono text-[11px] text-slate-300 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-['Outfit'] font-bold text-xl text-white group-hover:text-indigo-300 transition-colors cursor-pointer flex items-center justify-between gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed font-light">
                      {project.tagline}
                    </p>

                    {/* Clean unboxed technologies with typographic separators */}
                    <div className="mt-4 pt-3 border-t border-white/[0.05] flex flex-wrap items-center gap-y-1.5 text-xs text-slate-300">
                      {project.technologies.slice(0, 5).map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="font-mono text-[11px] text-indigo-300/90">{tech}</span>
                          {idx < Math.min(project.technologies.length, 5) - 1 && (
                            <span aria-hidden="true" className="mx-2 text-slate-600">/</span>
                          )}
                        </React.Fragment>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="ml-1 text-[11px] text-slate-500 font-mono">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 border-t border-white/[0.06] bg-[#0A0D13] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    Case Study & Metrics
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <button
                        onClick={() =>
                          onTriggerDemoLink(project.githubUrl!, `${project.title} (Repository)`)
                        }
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded transition-colors"
                        aria-label={`View ${project.title} GitHub repository`}
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    )}

                    {project.demoUrl && (
                      <button
                        onClick={() =>
                          onTriggerDemoLink(project.demoUrl!, `${project.title} (Live Demo)`)
                        }
                        className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-white/[0.06] rounded transition-colors"
                        aria-label={`View ${project.title} live demonstration`}
                        title="Open Live Demonstration"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
