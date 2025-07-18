import { defineField, defineType } from "sanity";

export const termsType = defineType({
  name: "terminos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
