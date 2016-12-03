import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/providers';
import { PokemonsPage } from '../../pages/pages';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [

    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
        animate('2000ms ease-in-out')
      ])
    ]),

    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0)' }),
        animate('1000ms ease-in-out')
      ])
    ]),

    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
          style({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
          style({ transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ])
    ]),

    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
})
export class LoginPage {
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";
  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, private authService: AuthService) { }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login() {
    console.log(`login: ${this.email} ${this.password}`);
    this.authService.login(this.email, this.password).then(({ data }) => {
      //will store stuff on local storage
      localStorage.setItem('auth_token', data.signinUser.token);
      this.authService.isAuthenticatedBool = true;
      // dispatch event and handle on login component?
      console.log(localStorage);
      this.navCtrl.setRoot(PokemonsPage);
    }).catch((error) => {
      this.authService.isAuthenticatedBool = false;
      console.log(error.graphQLErrors[0].message);
    });
  }

}
