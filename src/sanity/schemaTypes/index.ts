// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContent";
import { postType } from "./post";
import { testimonyType } from "./testimony";
import { clientType } from "./clients";
import { contactType } from "./contact";
import { termsType } from "./termsPages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    postType,
    testimonyType,
    clientType,
    contactType,
    termsType,
  ],
};
