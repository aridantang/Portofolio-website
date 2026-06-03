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
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
    },
    {
      name: 'processImages',
      title: 'Process Images',
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