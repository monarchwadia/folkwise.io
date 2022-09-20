import type { Post } from '../../../types';
import { absoluteUrl } from '../../../utils';
import type { Metatag, MetatagGenerator } from '../types';

const generalMetatags: MetatagGenerator = {
  pathPrefix: 'whatsapp',
  imageDimensions: {
    height: 400,
    width: 400
  },
  metatags: (post: Post): Metatag[] => [
    {
      type: 'property',
      key: 'og:image',
      content: absoluteUrl('socialpreviews', 'whatsapp', post.id) + '.png'
    },
    { type: 'property', key: 'og:image:height', content: '400' },
    { type: 'property', key: 'og:image:width', content: '400' }
  ]
};

export default generalMetatags;
