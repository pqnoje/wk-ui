import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-bmi-by-age-range',
  templateUrl: './bmi-by-age-range.component.html',
  styleUrls: ['./bmi-by-age-range.component.css']
})
export class BmiByAgeRangeComponent implements OnInit {
  
  chartData: any[]
  showXAxis = true
  showYAxis = true
  gradient = false
  showLegend = true
  showXAxisLabel = true
  xAxisLabel = 'Faixa de Idade'
  showYAxisLabel = true
  yAxisLabel = 'Média de IMC'
  componentLoaded: boolean

  constructor(private patientService: PatientService) {
    this.chartData = new Array<any>()
    this.componentLoaded = false
  }

  ngOnInit() {
    this.getChartData()
  }

  private getChartData(){
    this.patientService.getBMIByAgeRange().subscribe(chartData => {
      this.chartData = chartData
      this.componentLoaded = true
    })
  }
}
