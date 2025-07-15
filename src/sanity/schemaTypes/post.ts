import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "extracto",
      type: "string",
    }),

    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "texto alternativo",
        },
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Publicado el",
      type: "datetime",
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
      publishedAt: "publishedAt",
      media: "mainImage",
    },
  },
});
