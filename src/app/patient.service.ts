import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients = 'http://localhost:8080/patients'
  private byState = 'http://localhost:8080/patients/by-state'
  private bmiByAgeRange = 'http://localhost:8080/patients/bmi-by-age-range'
  private fatByGender = 'http://localhost:8080/patients/fat-by-gender'
  private medianAgeForBloodType = 'http://localhost:8080/patients/median-age-for-blood-type'
  private bloodDonors = 'http://localhost:8080/patients/blood-donors'

  constructor(private http: HttpClient) { }

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.patients)
  }

  getByState(): Observable<any[]> {
    return this.http.get<any[]>(this.byState)
  }

  getBMIByAgeRange(): Observable<any[]> {
    return this.http.get<any[]>(this.bmiByAgeRange)
  }

  getFatByGender(): Observable<any[]> {
    return this.http.get<any[]>(this.fatByGender)
  }

  getMedianAgeForBloodType(): Observable<any[]> {
    return this.http.get<any[]>(this.medianAgeForBloodType)
  }

  getBloodDonors(): Observable<any[]> {
    return this.http.get<any[]>(this.bloodDonors)
  }
}
