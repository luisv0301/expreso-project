import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contacto",
  title: "Contacto",
  type: "document",
  fields: [
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "telefono",
      type: "string",
    }),
  ],
});
