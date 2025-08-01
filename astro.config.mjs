// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "08bh5kcw",
      dataset: "production",
      useCdn: false, // See note on using the CDN
      apiVersion: "2025-01-28",
      studioBasePath: "/admin", // insert the current date to access the latest version of the API
    }),
    ,
    react(),
  ],

  image: {
    domains: ["cdn.sanity.io"],
  },

  adapter: node({
    mode: "standalone",
  }),
});