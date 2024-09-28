import db from "./info.json";
import dbImages from "./images.json";

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
  header: [db.navbar[0], db.navbar[1], db.navbar[2], db.navbar[3]],
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
  },
  aboutMe: {
    title: db.aboutMe.title,
    description: db.aboutMe.content,
  },
  contact: {
    title: db.contact.title,
    label: {
      name: db.contact.label.name,
      email: db.contact.label.email,
      service: {
        title: db.contact.label.service.title,
        dev: db.contact.label.service.dev,
        art: db.contact.label.service.art,
      },
      message: db.contact.label.message,
      send: db.contact.label.send,
    },
  },
  profileImages: db.profileImages,
};

interface imagesProps {
  imagesAbout: {
    src: string;
    alt: string;
  }[];
  imagesProject: {
    title: string[];
    image: string[];
    url: string;
    type: string;
  }[];
}

export const infoImages: imagesProps = {
  imagesAbout: dbImages.imagesAbout.map((item) => {
    return {
      src: item.src,
      alt: item.alt,
    };
  }),

  imagesProject: dbImages.imagesProject.map((item) => {
    return {
      title: item.title,
      image: item.image,
      url: item.url,
      type: item.type,
    };
  }),
};
