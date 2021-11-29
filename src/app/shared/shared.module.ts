import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SafeUrlPipe } from './safe-url.pipe';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent,SafeUrlPipe],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  //inorder to make other modules use components included in shared module, add those components in exports array
  exports: [RegistrationComponent, LoginComponent,SafeUrlPipe],
})
export class SharedModule {}
