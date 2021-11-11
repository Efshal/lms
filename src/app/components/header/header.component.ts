import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PaymentComponent } from 'src/app/shared/payment/payment.component';
import { RegistrationComponent } from 'src/app/shared/registration/registration.component';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { environment } from '../../../environments/environment';
import { StripeScriptTag } from 'stripe-angular';
import { USE_EMULATOR } from '@angular/fire/functions';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare let Stripe: (arg0: string) => any;
const stripe = Stripe(environment.stripe.key);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;

  dropdown = false;
  uid: any;
  data: any;
  stripeResult: any;
  private loading: any;
  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController,
    private authService: AuthService,
    private afFun: AngularFireFunctions,
    private stripeScriptTag: StripeScriptTag,
    private http: HttpClient,
    private loadingController: LoadingController
  ) {
    // if ( !this.stripeScriptTag.StripeInstance ) {
    // eslint-disable-next-line max-len
    //   this.stripeScriptTag.setPublishableKey( 'pk_test_51JssCMSHoIau0eIW0F0Ojtsp4QJgEBIuFejhESLQ7nsGlAJkwLYZmkrL3fcN4weJgY5wndqvtdzDOCNmuqjZzeuZ007H2Mgvxv' );
    // }
  }

  async ngOnInit() {
    console.log('oninint');
    const user = await this.authService.getInfo();
    console.log(user);
    this.uid = user.uid;
    console.log('hello', this.uid);
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
  public async loaderPresent(): Promise<any> {
    const loading = await this.loadingController.create({
      // cssClass: 'my-custom-loader-class',
      message: 'Connecting to Stripe',
      backdropDismiss: true,
    });
    await loading.present();
    return loading;
  }
  async paymentPopover() {
    this.loading = await this.loaderPresent();
    // this.http.get('url here').subscribe((res) => {
    //   if (this.loading) {
    //     this.loading.dismiss();
    //   }
    // });

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

    const user = await this.authService.getInfo();
    console.log(user);
    this.uid = user.uid;
    console.log('hello', this.uid);

    console.log('checking out with item id: ' + this.uid);
    // var stripe = Stripe(environment.stripe.key);

    this.data = {
      uid: this.uid,
    };
    console.log(this.data);

    this.http
      .post(
        'https://us-central1-scoolx-3cef4.cloudfunctions.net/stripeCheckoutWithoutDbQueries',
        this.data
      )
      .subscribe(
        async (result) => {
          console.log('heeeloo');
          console.log(result);

          this.stripeResult = await stripe.redirectToCheckout({
            // eslint-disable-next-line @typescript-eslint/dot-notation
            sessionId: result['id'],
          });
          if (this.loading) {
            this.loading.dismiss();
          }
          // .subscribe(
          //   res=>{
          //     console.log(res)
          //   },
          //   err=>{
          //     console.log(err)
          //   }
          // )
          console.log(this.stripeResult);
          // .then(function (result) {
          //     console.log("helllo")
          //     console.log(result);
          // })
          // .catch(function(err){
          //   console.log(err)
          // })
        },
        (err) => {
          console.log(err);
          console.log(err.message);
        }
      );
    console.log(this.stripeResult);
  }
}
