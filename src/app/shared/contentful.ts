export interface ContentfulContent {
  type: string;
  fields: {
    id: string;
    description: string;
    mainHeading: string;
    subHeading: string;
    code: string;
  };
}

export interface Fields {
  id: string;
  description: string;
  mainHeading: string;
  subHeading: string;
  code: string;
}
