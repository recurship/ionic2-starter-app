import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SignupResendPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup-resend/signup-resend.html',
})
export class SignupResendPage {

  constructor(private navCtrl: NavController) {
  }

  dismiss() {
   this.navCtrl.pop();
  }
}
