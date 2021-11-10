import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LessonDescriptionComponent } from './lesson-description/lesson-description.component';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { USE_EMULATOR } from '@angular/fire/functions';
import {
  AngularFirestoreModule,
  SETTINGS as FIRESTORE_SETTINGS,
} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [HeaderComponent, LessonDescriptionComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule,
    AngularFireFunctionsModule,
  ],
  exports: [HeaderComponent, LessonDescriptionComponent],
  providers: [
    {
      provide: FIRESTORE_SETTINGS,
      useValue: environment.emulator
        ? {
            host: 'localhost:8081',
            ssl: false,
          }
        : undefined,
    },
  ],
})
export class ComponentsModule {}
