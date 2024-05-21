import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfBotRoutingModule } from './conf-bot-routing.module';
import { IonicModule } from '@ionic/angular';
import { ConfBotComponent } from './conf-bot.component';



@NgModule({
  declarations: [ConfBotComponent],
  imports: [
    CommonModule,
    IonicModule,
    ConfBotRoutingModule,
  ],
  exports: [ConfBotComponent]

})
export class ConfBotModule { }
