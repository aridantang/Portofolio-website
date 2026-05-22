import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'problem',
      title: 'Problem',
      type: 'text',
    },
    {
      name: 'outcome',
      title: 'Outcome',
      type: 'text',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
  ],
}