import { defineField, defineType } from "sanity";

export const testimonyType = defineType({
  name: "testimonio",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      type: "string",
    }),
    defineField({
      name: "cargo",
      type: "string",
    }),
    defineField({
      name: "testimonio",
      type: "string",
    }),
    defineField({
      name: "imagenDePerfil",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "nombre",
      media: "imagenDePerfil",
    },
  },
});
