import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, IonicModule, TestRoutingModule], // Include TestRoutingModule here
  exports: [TestComponent]
})
export class TestModule {}
