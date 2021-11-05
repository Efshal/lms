import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseVideoService } from '../../services/firebase-video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentfulService } from 'src/app/services/contentful.service';
import { DataService } from 'src/app/services/data.service';
import { ContentfulContent, Fields } from 'src/app/shared/contentful';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.page.html',
  styleUrls: ['./course-overview.page.css'],
})
export class CourseOverviewPage implements OnInit {
  products: Observable<any>;
  lessonInfo: any;
  desc: string;
  creator: string;
  url: SafeResourceUrl;
  inputUrl: string;
  lesson$: Observable<any>;
  data: any;
  link:string;

  constructor(
    private http: HttpClient,
    public router: Router,
    private videoServie: FirebaseVideoService,
    public sanitizer: DomSanitizer,
    private contentful: ContentfulService,
    private dataService: DataService
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.inputUrl = params.link;
        console.log(this.inputUrl); // popular
      }
    );
    console.log('hello', this.inputUrl);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.inputUrl);
    console.log(this.url);
    this.lessonInfo = await this.videoServie.getLesson(this.inputUrl);
    this.desc = this.lessonInfo.description;
    this.creator = this.lessonInfo.creator;

    this.data = await this.contentful.loadContent('Flutter');
    console.log(this.data);
    // console.log(await this.contentful.loadContent('Flutter'));
    // console.lo
    // this.contentful.getSpace();
    // this.lesson$ = this.contentful.getContent('5rM25EoOrHx8erMumciV7X');
    // this.contentful.getContentByTag('lesson1');
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
