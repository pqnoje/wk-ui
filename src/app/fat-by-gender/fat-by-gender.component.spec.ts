import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatByGenderComponent } from './fat-by-gender.component';

describe('FatByGenderComponent', () => {
  let component: FatByGenderComponent;
  let fixture: ComponentFixture<FatByGenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatByGenderComponent]
    });
    fixture = TestBed.createComponent(FatByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
