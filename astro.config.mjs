// @ts-check

import { unified } from "@astrojs/markdown-remark"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import icon from "astro-icon"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import rehypeCodeBlocks from "@/lib/rehype-code-blocks.mjs"

/** @type {import("@astrojs/markdown-remark").RemarkPlugins} */
const remarkPlugins = [remarkMath]

/** @type {import("@astrojs/markdown-remark").RehypePlugins} */
const rehypePlugins = [
  rehypeKatex,
  [
    rehypeCodeBlocks,
    {
      theme: {
        light: "github-light",
        dark: "github-dark-default",
      },
    },
  ],
]

export default defineConfig({
  site: "https://notes.hyperoot.dev",
  trailingSlash: "never",
  prefetch: true,
  compressHTML: true,

  build: {
    format: "file",
  },

  markdown: {
    processor: unified({ remarkPlugins, rehypePlugins }),
    syntaxHighlight: false,
  },

  integrations: [
    icon({
      iconDir: "src/assets/icons",
      svgoOptions: {
        plugins: [
          {
            name: "convertColors",
            params: {
              currentColor: true,
            },
          },
        ],
      },
    }),
    mdx(),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
