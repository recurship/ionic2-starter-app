import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MemberListPage} from '../member-list/member-list';
/*
  Generated class for the GeneratePasswordPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/generate-password/generate-password.html',
})
export class GeneratePasswordPage {

  constructor(private navCtrl: NavController) {

  }

  viewMembers(event, item) {
     this.navCtrl.setRoot(MemberListPage, {
       item: item
     });

     this.navCtrl.popToRoot({
       direction: 'forward'
     });
  }

}
