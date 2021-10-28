import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseVideoService } from '../services/firebase-video.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.css'],
})
export class CoursesPage implements OnInit {
  courses: any;
  constructor(
    private http: HttpClient,
    public router: Router,
    private videoService: FirebaseVideoService
  ) {}

  ngOnInit() {
    // this.courses = this.http.get('https://fakestoreapi.com/products');
    this.getCourse();
  }

  getCourse = () =>
    this.videoService.getCourse().subscribe(
      (res) => {
        this.courses = res;
        // for (let i = 0; i < this.courses.length; i++) {
        //   console.log(this.courses[i].payload.doc.id);
        // }
      },
      (err) => console.log(err)
    );

  redirect(url) {
    console.log(url);
    this.videoService.setUrlFunc(url);
    this.router.navigate(['/courses/course-overview']);
    console.log('heree');
  }
}
