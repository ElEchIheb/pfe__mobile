import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { LocalStorgeService } from './local-storge.service';
import { AlertController } from '@ionic/angular'; // Ajout de l'import pour AlertController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showModal: boolean = false;
  resetPasswordEmail: string='';
  emailValid: boolean = true;
  loginform!: FormGroup;
  isLoggedIn = false;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private token:LocalStorgeService,
    private alertController: AlertController // Injection de AlertController

  ) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    if (this.token.getAccessToken()) {
      this.isLoggedIn = true;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Mot de passe envoyé avec succès',
      message: 'Votre mot de passe a été envoyé avec succès.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/login']); // Redirection vers la page de connexion
        }
      }]
    });
    await alert.present();
  }


  onSubmit() {
    if (this.loginform.valid) {
      this.authService.login(this.loginform.value).subscribe({
        next: (success) => {
          this.token.storeAccessToken(success[0].accesstoken);
          this.token.storeRefreshToken(success[1].refreshToken);
          this.token.storeRole(success[0].role);
          this.router.navigate(['/dash2']);
        },
        error: (error) => {
          console.error("Veuillez vérifier vos identifiants de connexion.");
        this.presentErrAlert("Veuillez vérifier vos identifiants de connexion.");
        }
      });
    } else {
      console.error('Veuillez remplir tous les champs correctement.');
      this.presentErrAlert('Veuillez remplir tous les champs correctement.');    }
  }
  async presentErrAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: message, // Utilisez le message passé en argument
      buttons: ['OK']
    });
    await alert.present();
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  checkValidEmail(event: string) {
    const value = event;
    const pattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/i;
    this.emailValid = pattern.test(value);
    return this.emailValid;
  }
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Une erreur s\'est produite lors de l\'envoi du mot de passe. Veuillez réessayer.',
      buttons: ['OK']
    });
    await alert.present();
  }
  confirmToSend() {
    if (this.checkValidEmail(this.resetPasswordEmail)) {
      this.authService.Forgotpassword(this.resetPasswordEmail).subscribe({
        next: (response) => {
          if (response) {
            this.showModal = false;
            this.presentAlert();
          }
        },
        error: (error) => {
          this.presentErrorAlert();
        }
      });
    }
  }
}
