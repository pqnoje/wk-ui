import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-median-age-for-blood-type',
  templateUrl: './median-age-for-blood-type.component.html',
  styleUrls: ['./median-age-for-blood-type.component.css']
})
export class MedianAgeForBloodTypeComponent {

  chartData: any[]
  gradient: boolean = true
  showLegend: boolean = true
  showLabels: boolean = true
  isDoughnut: boolean = false
  legendPosition: LegendPosition = LegendPosition.Below
  componentLoaded: boolean = false

  constructor(private patientService: PatientService) {
    this.chartData = new Array<any>()
  }

  ngOnInit() {
    this.getPatients()
  }

  private getPatients(){
    this.patientService.getMedianAgeForBloodType().subscribe(chartData => {
      this.chartData = chartData
      this.componentLoaded = true
    })
  }

}
