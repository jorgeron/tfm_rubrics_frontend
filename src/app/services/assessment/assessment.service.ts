import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private authService: AuthService,
    private http: HttpClient,
    private apiService: ApiService) { }


  createAssessment(assessment) {
    const idToken = this.authService.getIDtoken();
    const url = `${environment.backendApiBaseURL}/assessments/`;

    let headers = this.apiService.createHttpHeaders();
    headers = headers.append('idtoken', idToken);
    console.log('assessment: ', assessment);
    const body = JSON.stringify(assessment);
    console.log('assessment stringify: ', body);
    return new Promise<any>((resolve, reject) => {
      this.http.post(url, assessment, { headers }).toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }
}
