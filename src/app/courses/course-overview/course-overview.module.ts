import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CourseOverviewPageRoutingModule } from './course-overview-routing.module';

import { CourseOverviewPage } from './course-overview.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseOverviewPageRoutingModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [CourseOverviewPage],
})
export class CourseOverviewPageModule {}
