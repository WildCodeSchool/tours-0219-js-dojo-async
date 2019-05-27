import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drunkman } from 'src/app/shared/models/drunkman';

@Injectable({
  providedIn: 'root'
})
export class DrunkmanService {
  url = `${environment.url}/drunkmans`;

  constructor(private http: HttpClient) { }

  getFirstDrunkmanAsPromise(): Promise<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/1`).toPromise();
  }

  getSecondDrunkmanAsPromise(): Promise<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/2`).toPromise();
  }

  getThirdDrunkmanAsPromise(): Promise<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/3`).toPromise();
  }

  getFourthDrunkmanAsPromise(): Promise<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/4`).toPromise();
  }

  getFirstDrunkmanAsObservable(): Observable<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/1`);
  }

  getSecondDrunkmanAsObservable(): Observable<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/2`);
  }

  getThirdDrunkmanAsObservable(): Observable<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/3`);
  }

  getFourthDrunkmanAsObservable(): Observable<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/4`);
  }

  goFirstDrunkmanAsPromise(): Promise<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/1/go`).toPromise();
  }

  goSecondDrunkmanAsPromise(): Promise<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/2/go`).toPromise();
  }

  goThirdDrunkmanAsPromise(): Promise<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/3/go`).toPromise();
  }

  goFourthDrunkmanAsPromise(): Promise<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/4/go`).toPromise();
  }

  goFirstDrunkmanAsObservable(): Observable<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/1/go`);
  }

  goSecondDrunkmanAsObservable(): Observable<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/2/go`);
  }

  goThirdDrunkmanAsObservable(): Observable<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/3/go`);
  }

  goFourthDrunkmanAsObservable(): Observable<Drunkman> {
    return this.http.get<Drunkman>(`${this.url}/4/go`);
  }
}
