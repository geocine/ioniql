import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Organizations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html'
})
export class OrganizationsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Organizations Page');
  }

}
