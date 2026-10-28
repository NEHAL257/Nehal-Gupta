import React from 'react';
import {
  LayoutGrid,
  Component,
  Gauge,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem } from '../types/portfolio';

interface ServicesProps {
  services: ServiceItem[];
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  LayoutGrid,
  Component,
  Gauge,
  Rocket,
};

export const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 mb-2">
            Specialized Offerings
          </p>
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Consulting & Services
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-light">
            Architectural leadership, high-impact front-end execution, and design token integration.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || LayoutGrid;

            return (
              <div
                key={service.id}
                className="p-7 rounded-2xl bg-[#0E1118] border border-white/[0.06] hover:border-white/[0.14] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-['Outfit'] font-bold text-xl text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.05] mb-6">
                    <p className="text-xs uppercase font-mono tracking-wider text-slate-500">
                      Core Deliverables
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquiry CTA */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all pt-2"
                >
                  <span>Inquire for this engagement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
