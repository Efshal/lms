import { Injectable } from '@angular/core';
import { ContentfulContent } from '../shared/contentful';
import { ContentfulService } from './contentful.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  course_id: any;
  constructor(private contentful: ContentfulService) {}

  async loadContent(mainHeading: string): Promise<any> {
    const contentRaw = await this.contentful.getContent();
    contentRaw.forEach((content: ContentfulContent) => {
      // Fact
      if (content.fields.mainHeading === mainHeading) {
        console.log(content.fields);
        return content.fields;
      }
      // else if (content.type === 'testimonial') {
      //   this.testimonials.push(content.fields as Testimonial);
      // } else if (content.type === 'blog') {
      //   this.blogs.push(content.fields as Blog);
      // } else if (content.type === 'project') {
      //   this.projects.push(content.fields as Project);
      // } else if (content.type === 'question') {
      //   this.questions.push(content.fields as Question);
      // }
    });
  }
}
