import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/providers';
import { PokemonsPage } from '../../pages/pages';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string = "";
  password: string = "";
  loader: Loading;

  constructor(
    public navCtrl: NavController, 
    private authService: AuthService,
    private loadingController: LoadingController) { }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  showLoader(){
    this.loader = this.loadingController.create({
      content: 'Authenticating...'
    })

    this.loader.present();
  }

  login() {
    console.log(`login: ${this.email} ${this.password}`);
    this.showLoader();
    this.authService.login(this.email, this.password).then(({ data }) => {
      //will store stuff on local storage
      localStorage.setItem('auth_token', data.signinUser.token);
      this.authService.isAuthenticatedBool = true;
      // dispatch event and handle on login component?
      console.log(localStorage);
      this.loader.dismiss();
      this.navCtrl.setRoot(PokemonsPage);
    }).catch((error) => {
      this.authService.isAuthenticatedBool = false;
      console.log(error.graphQLErrors[0].message);
      this.loader.dismiss();
    });
  }

}
