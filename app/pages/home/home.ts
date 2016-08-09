import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignupPage} from '../signup/signup';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {
  
  }

  moveToSignup(event, item) {
     this.nav.push(SignupPage, {
       item: item
     });
  }
}
