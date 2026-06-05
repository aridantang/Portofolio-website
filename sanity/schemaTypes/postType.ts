export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower number shows first. e.g. 1, 2, 3...',
    },
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
      title: 'Short Description (for work grid)',
      type: 'text',
    },
    {
      name: 'workDescription',
      title: 'Work Description (for case study page)',
      type: 'text',
      description: 'Separate description used on the case study detail page',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
    },
    {
      name: 'processImages',
      title: 'Process Images (first 5 used in carousel)',
      type: 'array',
      of: [{ type: 'image' }],
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