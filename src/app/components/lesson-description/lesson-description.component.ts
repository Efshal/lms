import { Component, Input, OnInit } from '@angular/core';
import { Fields } from 'src/app/shared/contentful';

@Component({
  selector: 'app-lesson-description',
  templateUrl: './lesson-description.component.html',
  styleUrls: ['./lesson-description.component.scss'],
})
export class LessonDescriptionComponent implements OnInit {
  @Input() data: Fields;
  constructor() {}

  ngOnInit() {}
}
