import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/pages/login/authentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bull',
  templateUrl: './bull.component.html',
  styleUrls: ['./bull.component.scss'],
})
export class BullComponent  implements OnInit {
  dateSoins: string = '';
  bulletinForm!: FormGroup;
  formulaireEnvoye: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private alertController: AlertController // Ajout de AlertController

  ) { }
  //pour la date
 /* openDatePicker() {
    this.modalCtrl.create({
      component: 'ion-datetime',
      componentProps: {
        displayFormat: 'DD/MM/YYYY',
        value: this.dateSoins ? new Date(this.dateSoins) : new Date(),
        mode: 'ios',
        backdropDismiss: true
      }
    }).then(modal => {
      modal.present();
      modal.onDidDismiss().then(data => {
        if (data && data.data) {
          this.dateSoins = data.data;
        }
      });
    });
  }*/
  onSubmit() {
    if (this.bulletinForm.valid) {
      this.authService.envoyerBulletin(this.bulletinForm.value).subscribe({
        next: () => {
          console.log('Formulaire envoyé avec succès');
          this.presentAlert(); // Afficher l'alerte de succès
        },
        error: (error) => {
          console.error('Une erreur s\'est produite lors de l\'envoi du formulaire :', error);
          this.presentErrorAlert('Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer.'); // Afficher l'erreur d'interface utilisateur

        }
      });
    } else {
      console.error('Veuillez remplir tous les champs correctement.');
      this.presentErrorAlert('Veuillez remplir tous les champs correctement.'); // Afficher l'erreur d'interface utilisateur

    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Succès',
      message: 'Votre bulletin a été envoyé avec succès!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/bull']); // Redirection vers la page "bull"
        }
      }]
    });

    await alert.present();
  }
  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }



  resetForm(): void {
    this.bulletinForm.reset();
    this.formulaireEnvoye = false;
  }
  ngOnInit(): void {
    this.bulletinForm = this.formBuilder.group({
      marque: ['', Validators.required],
      refBS: ['', Validators.required],
      nomAdherent: ['', Validators.required],
      prenomMalade: ['', Validators.required],
      dateSoins: ['', Validators.required],
      honoraires: ['', Validators.required],
      pharmacie: ['', Validators.required],
      analyse: ['', Validators.required],
      maternite: ['', Validators.required],
      chirurgie: ['', Validators.required],
      inject: ['', Validators.required],
      dent:['', Validators.required],
      monture:['', Validators.required],
      total:['', Validators.required]
    });
  }

}
