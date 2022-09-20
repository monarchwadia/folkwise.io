export type Post = {
  id: string;
  slug: string;
  html: string;
  username: string;
  title: string;
  excerpt: string;
  isPublished: boolean;
  publishedOn: string;
  updatedOn: string;
};

export type StaffMember = {
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  imgURL: string;
  miniBio: string;
  isAcceptingProjects: boolean;
  linkedInURL?: string;
  twitterURL?: string;
  hasEmail: boolean;
};

export type Podcast = {
  episodeNum: number;
  title: string;
  description: string;
  sourceURL: string;
  guests: string[];
};

export type ToastNotification = {
  type: string;
  header: string;
  message: string;
};
