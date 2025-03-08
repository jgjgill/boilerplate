import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import relay from "vite-plugin-relay-lite";

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    reactRouter(),
    relay(),
    cjsInterop({
      dependencies: ["react-relay", "react-syntax-highlighter"],
    }),
    vanillaExtractPlugin(),
  ],
  optimizeDeps: { exclude: ["acorn"] },
});
