import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import {
  ContentfulContent,
  Fields,
  ContentfulEntry,
} from '../shared/contentful';
import { isNull } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  //eslint-disable-next-line @typescript-eslint/member-ordering
  client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });
  course_id: string;
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
    return check;
  }
  async loadLessonPreviewbyid(ID) {
    let options = {
      renderNode: {
        'embedded-asset-block': (node) =>
          `<img style="height: auto;
          max-width: 100%;margin: 40px 40px 40px 20px;" class="img-fluid" src="${node.data.target.fields.file.url}"/>`,
      },
    };
    let check: any;
    await this.client
      .getEntry(ID)
      .then((entry: any) => {
        console.log(entry);
        const rawRichTextField = entry.fields.lessonBlog;
        return documentToHtmlString(rawRichTextField, options);
      })
      .then((renderedHtml) => {
        // do something with html, like write to a file
        console.log(renderedHtml);
        check = renderedHtml;
        //document.getElementById('rich-text-body').innerHTML = renderedHtml;
      })
      .catch((error) => console.log(error));
    console.log('mubashir', check);
    return check;
  }

  setcourseID(CID) {
    this.course_id = CID;
    console.log(CID);
    console.log(this.course_id);
  }
  getcourseID() {
    // if (isNull(this.course_id)) {
    //   return 0;
    // }
    console.log(this.course_id);
    return this.course_id;
  }
}
