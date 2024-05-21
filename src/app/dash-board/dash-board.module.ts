import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashBoardComponent } from './dash-board.component';

@NgModule({
  declarations: [DashBoardComponent], // Include only DashBoardComponent here
  imports: [
    CommonModule,
    IonicModule, // Add IonicModule to the imports array
  ],
})
export class DashBoardModule {}
