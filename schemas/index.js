// Import object schemas
import blockContent from './objects/blockContent'
import imageItem from './objects/imageItem'
import videoItem from './objects/videoItem'
import linkItem from './objects/linkItem'
import address from './objects/address'
import noteReference from './objects/noteReference'
import download from './objects/download'
// document schemas
import note from './note'
import category from './category'
import tag from './tag'

export const schemaTypes = [
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
  imageItem,
  videoItem,
  linkItem,
  address,
  noteReference,
  download,

  // document types
  note,
  category,
  tag,
]
