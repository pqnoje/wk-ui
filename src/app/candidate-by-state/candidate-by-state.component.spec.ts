import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateByStateComponent } from './candidate-by-state.component';

describe('CandidateByStateComponent', () => {
  let component: CandidateByStateComponent;
  let fixture: ComponentFixture<CandidateByStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateByStateComponent]
    });
    fixture = TestBed.createComponent(CandidateByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
