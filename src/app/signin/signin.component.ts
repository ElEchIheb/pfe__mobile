import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent  implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  async closePopup() {
    await this.modalController.dismiss();
  }
}
