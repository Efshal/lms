import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { mustMatch } from '../must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;

  ionicForm: FormGroup;

  dropdown = false;
  isSubmitted: boolean;
  constructor(
    public authService: AuthService,
    public router: Router,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: mustMatch('password', 'confirmPassword'),
      }
    );
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }

  hideDropdown(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundary = rect.left + 2;
    const rightBoundary = rect.right - 2;

    if (
      xTouch < leftBoundary ||
      xTouch > rightBoundary ||
      yTouch < topBoundary
    ) {
      this.dropdown = false;
    }
  }
  async settingsPopover() {
    this.dismissClick();
    const popover = await this.popoverController.create({
      component: LoginComponent,
      cssClass: 'contact-popover',
      // componentProps: {
      //   site: siteInfo,
      // },
      // translucent: true,
    });

    // popover.onDidDismiss().then((result) => {
    //   console.log(result.data);
    // });

    return await popover.present();
    /** Sync event from popover component */
  }

  async dismissClick() {
    await this.popoverController.dismiss();
  }

  async loginGoogle() {
    await this.authService.googleLogin();
    const respone = await this.authService.getInfo();
    console.log(respone.uid);
  }
}
