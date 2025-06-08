// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContent";
import { postType } from "./post";
import { testimonyType } from "./testimony";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, testimonyType],
};
