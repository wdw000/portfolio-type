import { instance } from "@/main";
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      status: "init" as "init" | "done",
      data: {
        aboutMe: { position: 0 },
        skills: { data: [] as Skills[], position: 0 },
        learning: { data: [] as Learning[], position: 0 },
        link: { data: [] as Link[], position: 0 },
        projects: { data: [] as Project[], position: 0 },
      },
      currentNav: "Portfolio" as Nav,
    };
  },

  getters: {
    getSkill: (state) => {
      return (title: string) =>
        state.data.skills.data.find((item) => item.title === title);
    },
  },

  actions: {
    async setSkills() {
      try {
        const data = await (await instance.get("skills")).data;
        this.data.skills.data = data;
        return data;
      } catch (e) {
        return Promise.reject(e);
      }
    },

    async setLearning() {
      try {
        const data = await (await instance.get("learning")).data;
        this.data.learning.data = data;
        return data;
      } catch (e) {
        return Promise.reject(e);
      }
    },

    async setLink() {
      try {
        const data = await (await instance.get("link")).data;
        this.data.link.data = data;
        return data;
      } catch (e) {
        return Promise.reject(e);
      }
    },

    async setPropject() {
      try {
        const data = await (await instance.get("projects")).data;
        for (const item of data) {
          item.skills = JSON.parse(item.skills);
          item.functions = JSON.parse(item.functions);
        }

        this.data.projects.data = data;
      } catch (e) {
        return Promise.reject(e);
      }
    },

    async setData() {
      const data = await Promise.all([
        this.setSkills(),
        this.setLearning(),
        this.setLink(),
        this.setPropject(),
      ]);

      if (data) {
        setTimeout(() => {
          this.status = "done";
        }, 1000);
      }
    },

    setPosition(target: Target, offsetHeight: number) {
      this.data[target].position = offsetHeight;
    },

    addPosition(target: Target[], value: number) {
      for (const item of target) {
        this.data[item].position += value;
      }
    },

    setCurrentNav(current: Nav) {
      this.currentNav = current;
    },
  },
});

export type Target = "skills" | "link" | "learning" | "projects" | "aboutMe";

export type Nav = "Portfolio" | "About Me" | "Skills" | "Link" | "Projects";

export interface Skills {
  title: string;
  src: string;
}

export interface Learning {
  title: string;
  src: string;
}

export interface Link {
  title: string;
  imgURL: string;
  imgSrc: string;
}

export interface Project {
  title: string;
  imgSrc: string;
  skills: string[];
  functions: string[];
  git: string | null;
  web: string | null;
  pdf: string | null;
}
