import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slides = [
    {
      title: "Welcome!",
      description: "some description",
      image: "assets/imgs/slide1.jpeg",
    },
    {
      title: "title",
      description: "some description",
      image: "assets/imgs/slide4.jpeg",
    },
    {
      title: "Title",
      description: "some description",
      image: "assets/imgs/slide3.jpeg",
    }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  startApp(){
    this.navCtrl.setRoot(LoginPage);
  }

}
