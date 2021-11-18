export interface ContentfulContent {
  type: string;
  fields: {
    id: string;
    description: string;
    mainHeading: string;
    subHeading: string;
    code: string;
    lessonBlog: any;
  };
}
export interface ContentfulEntry {
  type: string;
  fields: {
    id: string;
    description: string;
    mainHeading: string;
    subHeading: string;
    code: string;
    lessonBlog: any;
  };
}
export interface Fields {
  id: string;
  description: string;
  mainHeading: string;
  subHeading: string;
  code: string;
  lessonBlog: any;
}
