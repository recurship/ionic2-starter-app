import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
  template: `
    <ion-menu [content]="content">
    <ion-toolbar>
      <ion-title>Pages</ion-title>
    </ion-toolbar>
    <ion-content>
      <ion-list>
        <button ion-item>
          Item 1
        </button>
        <button ion-item>
          About us
        </button>
        <button ion-item>
          Sign out
        </button>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>
  `
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

  }
}

ionicBootstrap(MyApp);
