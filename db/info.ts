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
    showMore: db.home.showMore,
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
};

export interface ImageAboutProps {
  images: string;
  alt: string;
}

export const infoImagesAbout = dbImages.imagesAbout.map((item) => {
  const image: ImageAboutProps = {
    images: item.images,
    alt: item.alt,
  };
  return image;
});

export interface ImageProjectProps {
  title: string[];
  description: string[];
  images: string[];
  url: string;
  type: string;
}

export const infoImagesProject = dbImages.imagesProject.map((item) => {
  const image: ImageProjectProps = {
    title: item.title,
    description: item.description,
    images: item.image,
    url: item.url,
    type: item.type,
  };
  return image;
});
