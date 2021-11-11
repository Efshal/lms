import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseVideoService } from 'src/app/services/firebase-video.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tag: string;
  courses: any;
  constructor(
    private videoService: FirebaseVideoService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  async ngOnInit() {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { order: "popular" }
      this.tag = params.tag;
    });
    this.courses = await this.videoService.getTagLesson(this.tag);
  }

  async tags(tag) {
    console.log(tag);
    // this.router.navigateByUrl('/', {skipLocationChange: true}).then(
    // ()=>

    // eslint-disable-next-line object-shorthand
    this.router.navigate(['/courses/tags'], { queryParams: { tag: tag } });
    //ask wajeeh how to reload a same url or navigate to same url with different parameter
    // this.courses = await this.videoService.getTagLesson(tag);
  }

  //ask wajeeh about this routing
  redirect(url) {
    console.log(url);
    this.videoService.setUrlFunc(url);
    this.router.navigate(['/courses/course-overview'], {
      queryParams: { link: url },
    });
    console.log('heree');
  }
}
