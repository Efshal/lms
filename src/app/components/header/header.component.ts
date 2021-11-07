import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PaymentComponent } from 'src/app/shared/payment/payment.component';
import { RegistrationComponent } from 'src/app/shared/registration/registration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;

  dropdown = false;

  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

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
    const popover = await this.popoverController.create({
      component: PaymentComponent,
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
}
