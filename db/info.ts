import db from "./info.json";
import { Contact } from '../sections/Contact/Contact';

interface jobProps {
  charge: string[];
  company: string;
  time: string[];
  description: string[];
  type: string;
}

interface projectProps {
  title: string[];
  image: string[];
  url: string;
  type: string;
}

export const info = {
  header: {
    about: db.navbar.about,
    experience: db.navbar.experience,
    projects: db.navbar.projects,
    contact: db.navbar.contact,
  },
  home: {
    welcome: db.home.welcome,
    description: db.home.description,
  },
  footer: {
    copy: db.footer.copy,
  },
  experience: {
    title: db.experience.title,
    subtitle: db.experience.subtitle,
    jobs: (index: number) => {
      const jobs: jobProps[] = [];
      db.experience.jobs.map((job) => {
        jobs.push({
          charge: job.charge,
          company: job.company,
          time: job.time,
          description: job.description,
          type: job.type,
        });
      });
      return jobs;
    },
  },
  projects: {
    title: db.project.title,
    toggle: {
      dev: db.project.toggle.dev,
      art: db.project.toggle.art,
    },
    projects: () => {
      const projects: projectProps[] = [];
      db.project.projects.map((project) => {
        projects.push({
          title: project.title,
          image: project.image,
          url: project.url,
          type: project.type,
        });
      });
      return projects;
    },
  },
  aboutMe: {
    title: db.aboutMe.title,
    description: db.aboutMe.content,
  },
  contact: {
    title: db.contact.title
  },
};
