import { type SchemaTypeDefinition } from 'sanity'
import { pet } from './product'
import { category } from './category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet,category],
}
