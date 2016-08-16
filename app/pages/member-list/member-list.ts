import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
/*
  Generated class for the MemberListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/member-list/member-list.html',
})
export class MemberListPage {

  constructor(private navCtrl: NavController) {
    // Incase you want to reset the app after it goes into the background.
    // document.addEventListener('resume', () => {
    //   console.log('Brought back to life!');
    //   window.location.reload();         
    // });
  }

}
