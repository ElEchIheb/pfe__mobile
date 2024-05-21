import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileFormPage } from './profile-form.page';

describe('ProfileFormPage', () => {
  let component: ProfileFormPage;
  let fixture: ComponentFixture<ProfileFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
