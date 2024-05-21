import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-req',
  templateUrl: './send-req.component.html',
  styleUrls: ['./send-req.component.scss'],
})
export class SendReqComponent  implements OnInit {
  selectedTab: string = 'my-requests';
  selectedType: string = 'Work Certificate';
  subject: string = '';
  content: string = '';
  constructor() { }
  sendRequest() {
    console.log('Request sent!');
  }
  ngOnInit() {}

}
