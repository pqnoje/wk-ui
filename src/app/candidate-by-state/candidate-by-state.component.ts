import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-candidate-by-state',
  templateUrl: './candidate-by-state.component.html',
  styleUrls: ['./candidate-by-state.component.css']
})
export class CandidateByStateComponent implements OnInit {

  chartData: any[]
  showXAxis = true
  showYAxis = true
  gradient = false
  showLegend = true
  showXAxisLabel = true
  xAxisLabel = 'Estados'
  showYAxisLabel = true
  yAxisLabel = 'Quantidade de Candidatos'
  componentLoaded: boolean

  constructor(private patientService: PatientService) {
    this.chartData = new Array<any>()
    this.componentLoaded = false
  }

  ngOnInit() {
    this.getChartData()
  }

  getChartData(){
    this.patientService.getByState().subscribe(chartData => {
      this.chartData = chartData
      this.componentLoaded = true
    })
  }

}
