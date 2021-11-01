import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseVideoService } from '../../services/firebase-video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentfulService } from 'src/app/services/contentful.service';

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

  constructor(
    private http: HttpClient,
    public router: Router,
    private videoServie: FirebaseVideoService,
    public sanitizer: DomSanitizer,
    private contentful: ContentfulService
  ) {}

  async ngOnInit() {
    this.inputUrl = this.videoServie.setUrl;
    console.log('hello', this.inputUrl);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.inputUrl);
    console.log(this.url);
    this.lessonInfo = await this.videoServie.getLesson(this.inputUrl);
    this.desc = this.lessonInfo.description;
    this.creator = this.lessonInfo.creator;
    this.products = this.http.get('https://fakestoreapi.com/products');

    // this.contentful.logContent('5rM25EoOrHx8erMumciV7X');
    // this.contentful.getContent2();
    // this.lesson$ = this.contentful.getContent('5rM25EoOrHx8erMumciV7X');
    this.contentful.getContentByTag('lesson1');
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
