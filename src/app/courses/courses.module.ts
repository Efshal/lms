import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesPageRoutingModule } from './courses-routing.module';
import { TagsComponent } from '../components/tags/tags.component';
import { CoursesPage } from './courses.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CoursesPage,TagsComponent],
})
export class CoursesPageModule {}
