import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { createClient } from 'contentful';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  // private client = contentful.createClient({
  //   space: environment.contentful.spaceId,
  //   accessToken: environment.contentful.token,
  // });

  // eslint-disable-next-line @typescript-eslint/member-ordering
  // client2 = createClient({
  //   space: environment.contentful.spaceId,
  //   accessToken: environment.contentful.token,
  // });

  client = contentful.createClient({
    space: environment.contentful.spaceId,
    environment: 'master', // defaults to 'master' if not set
    accessToken: environment.contentful.token,
  });

  constructor() {}

  //console logs a response for debugging
  // logContent(contentId) {
  //   this.client.getEntry(contentId).then((entry) => console.log(entry));
  // }

  //retrives content mapped to its data fields
  // getContent(contentId) {
  //   const promise = this.client.getEntry(contentId);
  //   // return Observable.fromPromise(promise).map((entry) => entry.fields);
  // }

  // async getContent2() {
  //   const entries = await this.client2.getEntries();
  //   console.log(entries);
  //   console.log(
  //     entries.items.map((entry) => ({
  //       type: entry.sys.contentType.sys.id,
  //       fields: {
  //         id: entry.sys.id,
  //         // eslint-disable-next-line @typescript-eslint/ban-types
  //         ...(entry.fields as object),
  //       },
  //     }))
  //   );
  //   return entries.items.map((entry) => ({
  //     type: entry.sys.contentType.sys.id,
  //     fields: {
  //       id: entry.sys.id,
  //       // eslint-disable-next-line @typescript-eslint/ban-types
  //       ...(entry.fields as object),
  //     },
  //   }));
  // }

  getContentByTag(tag) {
    this.client
      .getSpace()
      .then((space) => console.log(space))
      .catch(console.error);
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
}
