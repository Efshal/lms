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
  description: string;
  mainHeading: string;
  subHeading: string;
  code: string;
  lessonBlog: any;
}
export interface Lesson {
  id: string;
  lessonName: string;
  lessonDescription: string;
  tags: string;
  lessonBlog: any;
  proVideo: boolean;
  thumbnail: any;
}
