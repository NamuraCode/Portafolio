import db from "./info.json";

interface jobProps {
  charge: string[];
  company: string;
  time: string[];
  description: string[];
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
      const jobs : jobProps[] = [];
      db.experience.jobs.map((job) => {
        jobs.push({
          charge: job.charge,
          company: job.company,
          time: job.time,
          description: job.description,
          type: job.type,
        })
      })
      return jobs
    },
  },
  projects: {
    title: db.projects.title,
  }
};
