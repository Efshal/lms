import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseVideoService } from 'src/app/services/firebase-video.service';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tag: string;
  courses: any;
  myArray: any;
  routes: any = [];
  constructor(
    private videoService: FirebaseVideoService,
    private route: ActivatedRoute,
    public router: Router,
    private contentful: ContentfulService
  ) {}

  async ngOnInit() {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { order: "popular" }
      this.tag = params.tag;
    });
    this.courses = await this.contentful.loadLessonPreviewbyTag(this.tag);
    this.courses.forEach((element) => {
      this.routes.push(element.id);
    });
    console.log(this.courses);
    console.log('here2');
  }

  async tags(tag) {
    console.log(tag);
    this.router.navigate(['/courses/tags'], { queryParams: { tag: tag } });
  }
  redirect(url) {
    console.log(url);
    this.videoService.setUrlFunc(url);
    this.router.navigate(['/courses/', url], {
      queryParams: { link: url },
    });
    console.log('heree');
  }
  coursetag(id) {
    let tagss = id.tags;
    this.myArray = tagss.split(' ');
  }
}
