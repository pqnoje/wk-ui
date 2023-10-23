import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiByAgeRangeComponent } from './bmi-by-age-range.component';

describe('BmiByAgeRangeComponent', () => {
  let component: BmiByAgeRangeComponent;
  let fixture: ComponentFixture<BmiByAgeRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmiByAgeRangeComponent]
    });
    fixture = TestBed.createComponent(BmiByAgeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
