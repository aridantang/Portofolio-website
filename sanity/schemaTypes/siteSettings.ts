export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'heroImages',
      title: 'Hero Carousel Images',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Add as many images as you want for the hero carousel',
    },
  ],
}