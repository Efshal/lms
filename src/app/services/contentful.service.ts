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

  async loadLessonPreview() {
    const check: Fields[] = [];
    const contentRaw = await this.getContent();
    console.log(contentRaw);
    contentRaw.forEach((content: ContentfulContent) => {
      // lessonPreview
      if (content.type === 'lessonOverview') {
        console.log(content.fields);
        check.push(content.fields);
      }
    });
    // console.log('check', check.id);
    return check;
  }
}
