import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianAgeForBloodTypeComponent } from './median-age-for-blood-type.component';

describe('MedianAgeForBloodTypeComponent', () => {
  let component: MedianAgeForBloodTypeComponent;
  let fixture: ComponentFixture<MedianAgeForBloodTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedianAgeForBloodTypeComponent]
    });
    fixture = TestBed.createComponent(MedianAgeForBloodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
