import type { Post } from '../../types';

// Record gets output like so..
// <meta key1="value1" key2="value2" />
export type Metatag = {
  type: 'name' | 'property';
  key: string;
  content: string;
};

export type MetatagGenerator = {
  pathPrefix: string;
  imageDimensions: {
    height: number;
    width: number;
  };
  metatags: (post: Post) => Metatag[];
};
