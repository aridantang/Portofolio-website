import type {SchemaTypeDefinition} from 'sanity'
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {authorType} from './authorType'
import caseStudy from './postType'
import siteSettings from './siteSettings'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, categoryType, authorType, caseStudy, siteSettings],
}