// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: true,
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

  adapter: netlify(),
});
