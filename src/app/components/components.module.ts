import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LessonDescriptionComponent } from './lesson-description/lesson-description.component';

@NgModule({
  declarations: [HeaderComponent, LessonDescriptionComponent],
  imports: [CommonModule, IonicModule, RouterModule, SharedModule],
  exports: [HeaderComponent, LessonDescriptionComponent],
})
export class ComponentsModule {}
