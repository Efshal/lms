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

    // this.contentful.logContent('5rM25EoOrHx8erMumciV7X');
    const contentRaw = await this.contentful.getContent();
    contentRaw.forEach((content) => {
      console.log(content.fields);
      // // Fact
      // if (content.type === 'fact') {
      //   this.facts.cards.push(content.fields as SectionCard);
      // } else if (content.type === 'testimonial') {
      //   this.testimonials.push(content.fields as Testimonial);
      // } else if (content.type === 'blog') {
      //   this.blogs.push(content.fields as Blog);
      // } else if (content.type === 'project') {
      //   this.projects.push(content.fields as Project);
      // } else if (content.type === 'question') {
      //   this.questions.push(content.fields as Question);
      // }
    });
    // this.contentful.getSpace();
    // this.lesson$ = this.contentful.getContent('5rM25EoOrHx8erMumciV7X');
    // this.contentful.getContentByTag('lesson1');
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
