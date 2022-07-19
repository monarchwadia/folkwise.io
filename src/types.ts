export type Post = {
  id: string;
  slug: string;
  html: string;
  authorName: string;
  title: string;
  excerpt: string;
  isPublished: boolean;
  publishedOn: string;
  updatedOn: string;
};

export type StaffMember = {
  uuid: string;
  name: string;
  imgURL: string;
  miniBio: string;
  projectStatus: string;
  contactEmail: string;
};
