import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceFormPage } from './insurance-form.page';

describe('InsuranceFormPage', () => {
  let component: InsuranceFormPage;
  let fixture: ComponentFixture<InsuranceFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InsuranceFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
