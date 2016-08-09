import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignupConfirmPage} from '../signup-confirm/signup-confirm';

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {

  constructor(private navCtrl: NavController) {

  }

  moveToConfirm(event, item) {
     this.navCtrl.setRoot(SignupConfirmPage, {
       item: item
     });

     this.navCtrl.popToRoot({
       direction: 'forward'
     });
  }

}
