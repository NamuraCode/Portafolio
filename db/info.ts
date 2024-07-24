import db from "./info.json";

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
    jobs: (index: number) => {
      return {
        charge: db.experience.jobs[index].charge,
        company: db.experience.jobs[index].company,
        time: db.experience.jobs[index].time,
        description: db.experience.jobs[index].description,
        type: db.experience.jobs[index].type,
      };
    },
  },
};
