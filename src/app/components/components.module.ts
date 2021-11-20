import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LessonDescriptionComponent } from './lesson-description/lesson-description.component';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

@NgModule({
  declarations: [HeaderComponent, LessonDescriptionComponent],
  imports: [CommonModule, IonicModule, RouterModule, SharedModule,AngularFireFunctionsModule],
  exports: [HeaderComponent, LessonDescriptionComponent],
})
export class ComponentsModule {}
