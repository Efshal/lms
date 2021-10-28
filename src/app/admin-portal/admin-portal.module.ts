import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPortalPageRoutingModule } from './admin-portal-routing.module';

import { AdminPortalPage } from './admin-portal.page';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatFileSizePipe } from './format-file-size.pipe';

@NgModule({
  imports: [
    // CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdminPortalPageRoutingModule,
  ],
  declarations: [AdminPortalPage, FormatFileSizePipe],
})
export class AdminPortalPageModule {}
