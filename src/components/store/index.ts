import { instance } from "@/main";
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      status: "init" as "init" | "done",
      data: {
        skills: { data: [] as Skills[], position: 0 },
        learning: { data: [] as Learning[], position: 0 },
        link: { data: [] as Link[], position: 0 },
        project: { data: [] as Project[], position: 0 },
      },
    };
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

        this.data.project.data = data;
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
        }, 200);
      }
    },

    setPosition(target: Target, offsetHeight: number) {
      this.data[target].position = offsetHeight;
    },
  },
});

export type Target = "skills" | "link" | "learning" | "project";

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
