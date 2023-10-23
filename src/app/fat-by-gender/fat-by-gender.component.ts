import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-fat-by-gender',
  templateUrl: './fat-by-gender.component.html',
  styleUrls: ['./fat-by-gender.component.css']
})
export class FatByGenderComponent {

  chartData: any[]
  gradient: boolean = true
  showLegend: boolean = true
  showLabels: boolean = true
  isDoughnut: boolean = false
  legendPosition: LegendPosition = LegendPosition.Below
  componentLoaded: boolean

  constructor(private patientService: PatientService) {
    this.chartData = new Array<any>()
    this.componentLoaded = false
  }

  ngOnInit() {
    this.getChartData()
  }

  private getChartData(){
    this.patientService.getFatByGender().subscribe(chartData => {
      this.chartData = chartData
      this.componentLoaded = true
    })
  }

}
