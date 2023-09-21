export default {
  name: 'noteReference',
  type: 'object',
  fields: [
    {
      title: 'Note Reference',
      name: 'notereference',
      type: 'reference',
      weak: true,
      to: [{type: 'note'}],
    },
  ],
  preview: {
    select: {
      title: 'note.title',
    },
  },
}
