import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MemberListPage} from '../member-list/member-list';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController) {
  }

  login(event, item) {
     this.navCtrl.setRoot(MemberListPage, {
       item: item
     });

     this.navCtrl.popToRoot({
       direction: 'forward'
     });
  }

}
