import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonorsComponent } from './blood-donors.component';

describe('BloodDonorsComponent', () => {
  let component: BloodDonorsComponent;
  let fixture: ComponentFixture<BloodDonorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodDonorsComponent]
    });
    fixture = TestBed.createComponent(BloodDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
