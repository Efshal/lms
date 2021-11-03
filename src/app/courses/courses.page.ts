import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseVideoService } from '../services/firebase-video.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.css'],
})
export class CoursesPage implements OnInit {
  courses: any;
  tag:string;
  constructor(
    private http: HttpClient,
    public router: Router,
    private videoService: FirebaseVideoService,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.getCourse();
  }

  getCourse =  () =>{
     this.videoService.getCourse().subscribe(
      (res) => {
        this.courses = res;
        console.log(this.courses)
      },
      (err) => console.log(err)
    );
  }

  redirect(url) {
    console.log(url);
    this.videoService.setUrlFunc(url);
    this.router.navigate(['/courses/course-overview'], { queryParams: { link: url } });
    console.log('heree');
  }

  async tags(tag){
    console.log(tag)
    // this.getCourse()
    // console.log(this.courses)
    // this.courses=this.courses.filter(lesson=>lesson.payload.doc.data().tags.includes(tag))
    // console.log(this.courses)
    this.router.navigate(['/courses/tags'], { queryParams: { tag: tag} });
  }
}
