// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { ContentfulService } from '../services/contentful.service';
// import { FirebaseVideoService } from '../services/firebase-video.service';
// import { ContentfulContent, Fields } from '../shared/contentful';
// import { environment } from '../../environments/environment';
// import { createClient } from 'contentful';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// @Component({
//   selector: 'app-courses',
//   templateUrl: './courses.page.html',
//   styleUrls: ['./courses.page.css'],
// })
// export class CoursesPage implements OnInit {
//   routes: any = [];
//   courses: any;
//   tag: string;
//   client = createClient({
//     space: environment.contentful.spaceId,
//     accessToken: environment.contentful.token,
//   });
//   constructor(
//     private http: HttpClient,
//     public router: Router,
//     private videoService: FirebaseVideoService,
//     private route: ActivatedRoute,
//     private contentful: ContentfulService
//   ) {}
//   async getContent() {
//     const entries = await this.client.getEntries();

//     return entries.items.map((entry) => ({
//       type: entry.sys.contentType.sys.id,
//       fields: {
//         id: entry.sys.id,
//         // eslint-disable-next-line @typescript-eslint/ban-types
//         ...(entry.fields as object),
//       },
//     }));
//   }
//   async ngOnInit() {
//     this.getCourse();
//     this.loadLessonPreview;

//     // console.log(await this.contentful.loadLessonPreview());
//   }

//   getCourse = async () => {
//     this.courses = await this.contentful.loadLessonPreview();
//     console.log(this.courses[0].lessonName);
//     console.log(this.courses[0].tags);

//     this.courses.forEach((element) => {
//       this.routes.push(element.lessonName.replace(/\s+/g, '-'));
//     });
//     console.log(this.routes);

//     // this.videoService.getCourse().subscribe(
//     //   (res) => {
//     //     this.courses = res;
//     //     console.log(this.courses);
//     //   },
//     //   (err) => console.log(err)
//     // );
//   };

//   redirect(url) {
//     console.log(url);
//     this.videoService.setUrlFunc(url);
//     this.router.navigate(['/courses/', url], {
//       queryParams: { link: url },
//     });
//     console.log('heree');
//   }

//   async tags(tag) {
//     console.log(tag);
//     // this.getCourse()
//     // console.log(this.courses)
//     // this.courses=this.courses.filter(lesson=>lesson.payload.doc.data().tags.includes(tag))
//     // console.log(this.courses)
//     // eslint-disable-next-line object-shorthand
//     this.router.navigate(['/courses/tags'], { queryParams: { tag: tag } });
//   }
//   async loadLessonPreview() {
//     const check: Fields[] = [];
//     const contentRaw = await this.getContent();
//     console.log(contentRaw);
//     contentRaw.forEach((content: ContentfulContent) => {
//       // lessonPreview
//       if (content.type === 'lessonOverview') {
//         console.log(content.fields);
//         check.push(content.fields);
//       }

//       this.client
//         .getEntry('68iKhOzJysJAger4zJMrbb')
//         .then((entry) => {
//           const rawRichTextField = content.fields.lessonBlog;
//           //return rawRichTextField
//           console.log(rawRichTextField);
//           return documentToHtmlString(rawRichTextField);
//         })
//         .then((renderedHtml) => {
//           // do something with html, like write to a file
//           console.log(renderedHtml);
//           document.getElementById('rich-text-body').innerHTML = renderedHtml;
//         })
//         .catch((error) => console.log(error));
//     });

//     // console.log('check', check.id);
//     return check;
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
import { FirebaseVideoService } from '../services/firebase-video.service';
import { NavController } from '@ionic/angular';
import { CourseOverviewPage } from './course-overview/course-overview.page';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.css'],
})
export class CoursesPage implements OnInit {
  lessoncourses = 'mubashir';
  routes: any = [];
  courses: any;
  tag: string;
  constructor(
    private http: HttpClient,
    public router: Router,
    private videoService: FirebaseVideoService,
    private route: ActivatedRoute,
    private contentful: ContentfulService,
    public navctrol: NavController
  ) {}

  async ngOnInit() {
    console.log('here1');
    this.getCourse();
    console.log('here2');
    //console.log(await this.contentful.loadLessonPreview());
  }

  getCourse = async () => {
    console.log('here3');
    this.courses = await this.contentful.loadLessonPreview();
    // console.log(this.courses[0].lessonName);
    // console.log(this.courses[0].tags);

    this.courses.forEach((element) => {
      this.routes.push(element.lessonName.replace(/\s+/g, '-'));
    });
    console.log(this.courses); 
    console.log('here4');
    console.log(this.routes);
    console.log('here5');

    // this.videoService.getCourse().subscribe(
    //   (res) => {
    //     this.courses = res;
    //     console.log(this.courses);
    //   },
    //   (err) => console.log(err)
    // );
  };

  redirect(url) {
    console.log(url);
    this.videoService.setUrlFunc(url);
    this.router.navigate(['/courses/', url], {
      queryParams: { link: url },
    });
    console.log('heree');
  }

  async tags(tag) {
    console.log(tag);
    // this.getCourse()
    // console.log(this.courses)
    // this.courses=this.courses.filter(lesson=>lesson.payload.doc.data().tags.includes(tag))
    // console.log(this.onourses)
    // eslint-disable-next-line object-shorthand
    this.router.navigate(['/courses/tags'], { queryParams: { tag: tag } });
  }
  async courseid(id) {
    let Course_id = id;
    console.log('clicked:', id['id']);
    this.contentful.setcourseID(Course_id);
    this.router.navigate(['/courses/course-overview'], { queryParams: { id:id['id'] } });
  }

}
