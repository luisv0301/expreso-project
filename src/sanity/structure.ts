export const myStructure = (S: any) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Contacto")
        .child(S.document().schemaType("contactType").documentId("contacto")),
      ...S.documentTypeListItems(),
    ]);
