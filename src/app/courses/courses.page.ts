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
  routes: any = [];
  courses: any;
  tag: string;
  myArray: any;
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
  }

  getCourse = async () => {
    console.log('here3');
    this.courses = await this.contentful.loadLessonPreview();
    this.courses.forEach((element) => {
      this.routes.push(element.id);
    });
    console.log(this.courses);
    console.log('here4');
    console.log(this.routes);
    console.log('here5');
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
  coursetag(id) {
    let tagss = id.tags;
    this.myArray = tagss.split(' ');
  }
}
