import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {SignupResendPage} from '../signup-resend/signup-resend';
import {GeneratePasswordPage} from '../generate-password/generate-password';
/*
  Generated class for the SignupConfirmPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup-confirm/signup-confirm.html',
})
export class SignupConfirmPage {

  constructor(private navCtrl: NavController, private modalController : ModalController) {

  }

  resendLink() {
    let modal = this.modalController.create(SignupResendPage);
    modal.present();
  }

  confirmPasscode(event, item) {
     this.navCtrl.push(GeneratePasswordPage, {
       item: item
     });
  }

}
