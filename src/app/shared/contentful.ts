interface ContentfulEntry {
  id?: string;
}
export interface Contentful extends ContentfulEntry {
  id: string;
  description: string;
  mainHeading: string;
  subHeading: string;
  code: string;
}
