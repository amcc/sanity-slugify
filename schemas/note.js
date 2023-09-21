export default {
  name: 'note',
  title: 'Note',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Note Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      title: 'Images and Video',
      name: 'media',
      type: 'array',
      description: 'Add images and video',
      of: [
        {
          title: 'Image',
          name: 'imageItem',
          type: 'imageItem',
        },
        {
          title: 'Video',
          name: 'videoItem',
          type: 'videoItem',
        },
      ],
    },
    {
      name: 'categories',
      title: 'GMD Categories',
      description: 'Select a relevant GMD Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
          options: {
            disableNew: true,
          },
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      description: 'Select a tag or add a new one, just start typing to see suggestions',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      description: 'Add a link',
      of: [
        {
          title: 'link',
          name: 'linkItem',
          type: 'linkItem',
        },
      ],
    },
    {
      title: 'Downloads',
      name: 'downloads',
      type: 'array',
      description: 'Add downloads',
      of: [
        {
          title: 'Download',
          name: 'file',
          type: 'file',
        },
      ],
    },
    {
      title: 'Related Notes',
      name: 'relatedNotes',
      type: 'array',
      description: 'Add a related note',
      of: [
        {
          title: 'Related note',
          name: 'noteReference',
          type: 'noteReference',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
