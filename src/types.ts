export type Post = {
  id: string;
  slug: string;
  html: string;
  uuid: string;
  title: string;
  excerpt: string;
  isPublished: boolean;
  publishedOn: string;
  updatedOn: string;
};

export type StaffMember = {
  uuid: string;
  name: string;
  role: string;
  imgURL: string;
  miniBio: string;
  projectStatus: string;
  linkedInURL?: string;
  twitterURL?: string;
  hasEmail: boolean;
};
