import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonorsComponent } from './blood-donors/blood-donors.component';
import { MedianAgeForBloodTypeComponent } from './median-age-for-blood-type/median-age-for-blood-type.component';
import { FatByGenderComponent } from './fat-by-gender/fat-by-gender.component';
import { CandidateByStateComponent } from './candidate-by-state/candidate-by-state.component';
import { BmiByAgeRangeComponent } from './bmi-by-age-range/bmi-by-age-range.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'blood-donors', component: BloodDonorsComponent },
  { path: 'median-age-for-blood-type', component: MedianAgeForBloodTypeComponent },
  { path: 'fat-by-gender', component: FatByGenderComponent },
  { path: 'candidate-by-state', component: CandidateByStateComponent },
  { path: 'bmi-by-age-range', component: BmiByAgeRangeComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
