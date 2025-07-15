import { defineField, defineType } from "sanity";

export const clientType = defineType({
  name: "clientes",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      type: "string",
    }),
    defineField({
      name: "logo",
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
      media: "logo",
    },
  },
});
