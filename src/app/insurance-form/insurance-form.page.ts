import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importer AlertController
import { Router } from '@angular/router'; // Importer le Router

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.page.html',
  styleUrls: ['./insurance-form.page.scss'],
})
export class InsuranceFormPage {

  nom: string = '';
  prenom: string = '';
  adresse: string = '';
  email: string = '';
  telephone: string = '';
  typeAssurance: string = '';
  montantAssure: number = 0;


  constructor(private alertController: AlertController, private router: Router) { } // Injecter AlertController et le Router

  async submitForm() { // Marquer la fonction comme async car la création d'alerte est asynchrone
    // Vous pouvez implémenter ici la logique pour traiter les données du formulaire,
    // telles que l'envoi à un serveur backend ou le stockage local.
    console.log('Nom:', this.nom);
    console.log('Prénom:', this.prenom);
    console.log('Adresse:', this.adresse);
    console.log('Email:', this.email);
    console.log('Téléphone:', this.telephone);
    console.log('Type d\'Assurance:', this.typeAssurance);
    console.log('Montant Assuré:', this.montantAssure);

    // Créer et afficher l'alerte
    const alert = await this.alertController.create({
      header: 'Formulaire envoyé avec succès',
      buttons: [{
        text: 'Dashboard',
        handler: () => {
          this.router.navigateByUrl('/dash2'); // Rediriger vers /dash2 lors du clic sur le bouton "Action"
        }
      }]
    });

    await alert.present(); // Afficher l'alerte
  }
}
