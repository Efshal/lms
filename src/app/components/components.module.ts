import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    // CommonModule,
    IonicModule,
    RouterModule,
    SharedModule,
  ],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
