import type { Config } from "@react-router/dev/config";
import { glob } from "glob";

export default {
  appDirectory: "./src/web",
  buildDirectory: "./dist/web",
  async prerender() {
    const mdxFiles = await glob("./src/web/quiz/**/*.mdx");

    return mdxFiles.map((file) => {
      const fileName = file.split("/").pop() ?? "";
      const quizId = fileName.replace(".mdx", "");
      return `/quizzes/${quizId}`;
    });
  },
} satisfies Config;
