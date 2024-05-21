import { Component, OnInit } from '@angular/core';
import { MyReqService } from './my-req.service';

@Component({
  selector: 'app-my-req',
  templateUrl: './my-req.component.html',
  styleUrls: ['./my-req.component.scss'],
})
export class MyReqComponent implements OnInit {
  selectedTab: string = 'my-requests';
  selectedType: string = 'Work Certificate';
  subject: string = '';
  content: string = '';
  startDate!: Date  ;
  endDate!: Date;

  constructor(private myReqService: MyReqService) {}

  sendRequest() {
    const formData = {
      type: this.selectedType,
      subject: this.subject,
      content: this.content,
      startDate: this.startDate,
      endDate: this.endDate
    };

    this.myReqService.SendReq(formData).subscribe(
      (response) => {
        console.log('Request sent successfully!', response);
        // Réinitialiser les champs après l'envoi réussi si nécessaire
        this.resetForm();
      },
      (error) => {
        console.error('Error sending request:', error);
        // Gérer les erreurs ici
      }
    );
  }

  resetForm() {
    this.selectedType = 'Work Certificate';
    this.subject = '';
    this.content = '';
  }
  ngOnInit() {}
}
