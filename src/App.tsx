import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';
import { DemoLinkModal } from './components/DemoLinkModal';

import {
  INITIAL_PROFILE,
  SKILLS_DATA,
  PROJECTS_DATA,
  EXPERIENCE_DATA,
  SERVICES_DATA,
  ACHIEVEMENTS_DATA,
  TESTIMONIALS_DATA,
} from './data/portfolioData';
import { ProfileData, ProjectItem } from './types/portfolio';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(INITIAL_PROFILE);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [demoLink, setDemoLink] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });
  const [contactSubject, setContactSubject] = useState<string>('');

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setContactSubject(`Consulting Inquiry: ${serviceTitle}`);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerDemoLink = (url: string, title: string) => {
    setDemoLink({ isOpen: true, url, title });
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        onOpenEditProfile={() => setIsEditProfileOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <About
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Skills
          skills={SKILLS_DATA}
        />

        <Projects
          projects={PROJECTS_DATA}
          onSelectProject={(project) => setSelectedProject(project)}
          onTriggerDemoLink={handleTriggerDemoLink}
        />

        <Experience
          items={EXPERIENCE_DATA}
        />

        <Services
          services={SERVICES_DATA}
          onSelectService={handleSelectService}
        />

        <Achievements
          achievements={ACHIEVEMENTS_DATA}
          testimonials={TESTIMONIALS_DATA}
        />

        <Contact
          profile={profile}
          prefilledSubject={contactSubject}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onTriggerDemoLink={handleTriggerDemoLink}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experience={EXPERIENCE_DATA}
        skills={SKILLS_DATA}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onUpdateProfile={(updated) => setProfile(updated)}
      />

      <DemoLinkModal
        isOpen={demoLink.isOpen}
        onClose={() => setDemoLink({ isOpen: false, url: '', title: '' })}
        url={demoLink.url}
        title={demoLink.title}
      />
    </div>
  );
}
