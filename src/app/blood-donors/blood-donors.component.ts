import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-blood-donors',
  templateUrl: './blood-donors.component.html',
  styleUrls: ['./blood-donors.component.css']
})
export class BloodDonorsComponent {

  chartData: any[]
  componentLoaded: boolean

  constructor(private patientService: PatientService) {
    this.chartData = new Array<any>()
    this.componentLoaded = false
  }

  ngOnInit() {
    this.getPatients()
  }

  private getPatients() {
    this.patientService.getBloodDonors().subscribe(chartData => {
      this.chartData = chartData
      this.componentLoaded = true
    })
  }
}
