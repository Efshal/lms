import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseVideoService } from '../../services/firebase-video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(
    private http: HttpClient,
    public router: Router,
    private videoServie: FirebaseVideoService,
    public sanitizer: DomSanitizer
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
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
