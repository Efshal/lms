// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// }
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FirebaseVideoService } from '../services/firebase-video.service';
import { ModalController, NavParams } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { RegistrationComponent } from '../registration/registration.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { mustMatch } from '../must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;

  ionicForm: FormGroup;

  submitted = false;
  isSubmitted: boolean;
  dropdown = false;
  modalTitle: string;
  modelId: number;

  constructor(
    private popoverController: PopoverController,
    public formBuilder: FormBuilder,
    public firebaseVideoService: FirebaseVideoService,
    private modalController: ModalController,
    private navParams: NavParams,
    private authService: AuthService
  ) {}

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

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      componentProps: {
        paramID: 123,
        paramTitle: 'Test Title',
      },
    });

    return await modal.present();
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
      component: RegistrationComponent,
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

  async dismissClick(): Promise<void> {
    await this.popoverController.dismiss();
  }

  async loginGoogle() {
    await this.authService.googleLogin();
    const respone = await this.authService.getInfo();
    console.log(respone.uid);
  }

  // modal.onDidDismiss().then((dataReturned) => {
  //   if (dataReturned !== null) {
  //     this.dataReturned = dataReturned.data;
  //     //alert('Modal Sent Data :'+ dataReturned);
  //   }
  // });
}
