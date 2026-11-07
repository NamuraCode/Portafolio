import db from "./info.json";
import dbImages from "./images.json";
import type { ImageProjectProps } from "@/helpers/HelperSlider/HelperSlider";

export type { ImageProjectProps };

export interface JobProps {
  charge: string[];
  company: string;
  time: string[];
  description: string[];
  stack: string[];
  type: string;
}

export interface SkillGroup {
  title: string[];
  items: string[];
}

export const info = {
  header: [db.navbar[0], db.navbar[1], db.navbar[2], db.navbar[3]],
  home: {
    role: db.home.role,
    cta: db.home.cta,
    welcome: db.home.welcome,
    description: db.home.description,
    showMore: db.home.showMore,
  },
  footer: db.footer,
  experience: {
    title: db.experience.title,
    devSubtitle: db.experience.devSubtitle,
    subtitle: db.experience.subtitle,
    jobs: (): JobProps[] => {
      return db.experience.jobs.map((job) => ({
        charge: job.charge,
        company: job.company,
        time: job.time,
        description: job.description,
        stack: job.stack,
        type: job.type,
      }));
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
    skillsTitle: db.aboutMe.skillsTitle,
    skills: db.aboutMe.skills as SkillGroup[],
  },
  contact: {
    title: db.contact.title,
    intro: db.contact.intro,
    placeholder: db.contact.placeholder,
    status: db.contact.status,
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
