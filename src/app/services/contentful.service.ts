import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { ContentfulContent, Fields } from '../shared/contentful';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  //eslint-disable-next-line @typescript-eslint/member-ordering
  client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  constructor() {}

  async getContent() {
    const entries = await this.client.getEntries();

    return entries.items.map((entry) => ({
      type: entry.sys.contentType.sys.id,
      fields: {
        id: entry.sys.id,
        // eslint-disable-next-line @typescript-eslint/ban-types
        ...(entry.fields as object),
      },
    }));
  }

  async loadContent(mainHeading: string) {
    const check: Fields[] = [];
    const contentRaw = await this.getContent();
    contentRaw.forEach((content: ContentfulContent) => {
      // Fact
      // if (content.fields.mainHeading === mainHeading) {
      console.log(content.fields);
      check.push(content.fields);
      // }
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
    // console.log('check', check.id);
    return check;
  }

  async getContentByTag(tag) {
    // const myspace = await this.client.getSpace();
    // this.client
    // this.client
    //   .getSpace()
    //   .then((space) => space.getEnvironment())
    //   .then((env) => env.getEntries({ 'metadata.tags.sys.id[in]': tag }))
    //   .then((entries) => {
    //     console.log(entries);
    //     return entries;
    //   })
    //   .catch(console.error);
  }

  async getSpace() {
    // console.log(this.client.getSpace());
    const space = await this.client.getSpace();
    console.log(space);
  }
}
