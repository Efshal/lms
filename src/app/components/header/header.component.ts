import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PaymentComponent } from 'src/app/shared/payment/payment.component';
import { RegistrationComponent } from 'src/app/shared/registration/registration.component';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { environment } from '../../../environments/environment';
import { Stripe } from 'stripe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;

  dropdown = false;
  uid:any
  
  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController,
    private authService: AuthService,
    private afFun: AngularFireFunctions
  ) {}

  async ngOnInit() {
  console.log("oninint")
   const user= await this.authService.getInfo();
   console.log(user)
    this.uid=user.uid
    console.log("hello",this.uid)
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
    const siteInfo = { id: 1, name: 'edupala' };
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
  async paymentPopover() {
    // const popover = await this.popoverController.create({
    //   component: PaymentComponent,
    //   cssClass: 'contact-popover',
    //   // componentProps: {
    //   //   site: siteInfo,
    //   // },
    //   // translucent: true,
    // });
    // // popover.onDidDismiss().then((result) => {
    // //   console.log(result.data);
    // // });
    // return await popover.present();
    // /** Sync event from popover component */

    const user= await this.authService.getInfo();
    console.log(user)
     this.uid=user.uid
     console.log("hello",this.uid)

     
      console.log('checking out with item id: ' + this.uid);


      // this.afFun.httpsCallable("stripeCheckoutWithoutDbQueries")({ id: this.uid })
      //     .subscribe(result => {
      //         console.log({ result });

      //         stripe.redirectToCheckout({
      //             sessionId: result,
      //         }).then(function (result) {
      //             console.log(result.error.message);
      //         });
      //     });
  

    
  }
}
