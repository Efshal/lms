import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { createClient } from 'contentful';
import { from } from 'rxjs';
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
