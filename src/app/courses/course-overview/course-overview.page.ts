// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { FirebaseVideoService } from '../../services/firebase-video.service';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { ContentfulService } from 'src/app/services/contentful.service';
// import { DataService } from 'src/app/services/data.service';
// import { ContentfulContent, Fields } from 'src/app/shared/contentful';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { Entry } from 'contentful';

// @Component({
//   selector: 'app-course-overview',
//   templateUrl: './course-overview.page.html',
//   styleUrls: ['./course-overview.page.css'],
// })
// export class CourseOverviewPage implements OnInit {
//   products: Observable<any>;
//   lessonInfo: any;
//   desc: string;
//   creator: string;
//   url: SafeResourceUrl;
//   inputUrl: string;
//   lesson$: Observable<any>;
//   alldata: any;
//   link: string;
//   private posts: Entry<any>[] = [];

//   constructor(
//     private http: HttpClient,
//     public router: Router,
//     private videoServie: FirebaseVideoService,
//     public sanitizer: DomSanitizer,
//     private contentful: ContentfulService,
//     private dataService: DataService,
//     private route: ActivatedRoute
//   ) {}

//   async ngOnInit() {
//     // this.contentful.getContent().then((posts) => {
//     //   posts = posts;
//     //   console.log(this.posts);
//     // });

//     this.route.queryParams.subscribe((params) => {
//       console.log(params); // { order: "popular" }

//       this.inputUrl = params.link;
//       console.log(this.inputUrl); // popular
//     });
//     console.log('hello', this.inputUrl);

//     // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.inputUrl);
//     // console.log(this.url);
//     // this.lessonInfo = await this.videoServie.getLesson(this.inputUrl);
//     // console.log(this.lessonInfo);
//     // this.desc = this.lessonInfo.description;
//     // this.creator = this.lessonInfo.creator;

//     this.alldata = await this.contentful.loadLessonPreview();
//     console.log(this.alldata);
//     // console.log(await this.contentful.loadContent('Flutter'));
//     // console.lo
//     // this.contentful.getSpace();
//     // this.lesson$ = this.contentful.getContent('5rM25EoOrHx8erMumciV7X');
//     // this.contentful.getContentByTag('lesson1');
//   }

//   redirect() {
//     this.router.navigate(['/']);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseVideoService } from '../../services/firebase-video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentfulService } from 'src/app/services/contentful.service';
import { DataService } from 'src/app/services/data.service';
import { ContentfulContent, Fields, Lesson } from 'src/app/shared/contentful';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.page.html',
  styleUrls: ['./course-overview.page.css'],
})
export class CourseOverviewPage implements OnInit {
  @Input() courselesson;
  products: Observable<any>;
  lessonInfo: any;
  desc: string;
  creator: string;
  url: SafeResourceUrl;
  inputUrl: string;
  lesson$: Observable<any>;
  alldata: any;
  link: string;
  courseID: string;
  routes: any = [];
  courses: any;
  richtext: any;
  CID: any;
  lessonname: string;
  lessondescription: string;
  tags: string;
  client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  constructor(
    private http: HttpClient,
    public router: Router,
    private videoServie: FirebaseVideoService,
    public sanitizer: DomSanitizer,
    private contentful: ContentfulService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
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
  async ngOnInit() {
    // console.log(this.courselesson);
    this.route.paramMap.subscribe((params) => {
      // console.log(params);
      this.courseID = params.get('courseID');
      console.log(this.courseID);
    });

    this.getCourse();
  }
  async getCourse() {
    // this.CID = this.contentful.getcourseID();

    this.richtext = await this.contentful.loadLessonPreviewbyid(this.courseID);
    console.log(this.courses);
    document.getElementById('rich-text-body').innerHTML = this.richtext;
    console.log('HEHRE:', this.courseID);
    this.courses = await this.contentful.loadLesson(this.courseID);
    // this.courses.push(this.contentful.loadLesson(this.courseID));
    // this.courses.push(this.contentful.loadLesson(this.courseID));
    console.log('okaaay,', this.courses.lessonDescription);
    this.lessonname = this.courses.lessonName;
    this.lessondescription = this.courses.lessonDescription;
    this.tags = this.courses.tags;
  }
  // redirect() {
  //   this.router.navigate(['/']);
  // }
}
