import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  loader: HTMLIonLoadingElement;

  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    private loadingController: LoadingController) { }

  ngOnInit() {
    console.log('Hello LoginPage Page');
  }

  async showLoader() {
    this.loader = await this.loadingController.create({
      message: 'Authenticating...'
    });

    this.loader.present();
  }

  login() {
    console.log(`login: ${this.email} ${this.password}`);
    this.showLoader();
    this.authService.login(this.email, this.password).then(({ data }) => {
      // will store stuff on local storage
      localStorage.setItem('auth_token', data.signinUser.token);
      this.authService.isAuthenticatedBool = true;
      // dispatch event and handle on login component?
      console.log(localStorage);
      this.loader.dismiss();
      this.navCtrl.navigateRoot('/pokemons');
    }).catch((error) => {
      this.authService.isAuthenticatedBool = false;
      console.log(error.graphQLErrors[0].message);
      this.loader.dismiss();
    });
  }

}
