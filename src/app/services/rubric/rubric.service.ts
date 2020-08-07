import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rubric } from 'src/app/models/rubric.model';

@Injectable({
  providedIn: 'root'
})
export class RubricService {

  constructor(private authService: AuthService,
    private http: HttpClient,
    private apiService: ApiService) { }


  getRubricsByTeacher(): Observable<any> {
    const idToken = this.authService.getIDtoken();
    const idTeacher = this.authService.getCurrentActor()._id;
    const url = `${environment.backendApiBaseURL}/actors/` + idTeacher + '/rubrics';

    let headers = this.apiService.createHttpHeaders();
    headers = headers.append('idToken', idToken);

    return this.http.get(url, {headers});
  }

  /*getRubricById(idRubric): Observable<any> {
    const url = `${environment.backendApiBaseURL}/rubrics/` + idRubric;
    const headers = this.apiService.createHttpHeaders();

    return this.http.get<Rubric>(url, {headers});
  }*/

  getRubricById(idRubric) {
    const url = `${environment.backendApiBaseURL}/rubrics/` + idRubric;
    const headers = this.apiService.createHttpHeaders();

    return this.http.get<Rubric>(url, {headers}).toPromise();
  }

  createRubric(rubric) {
    const idToken = this.authService.getIDtoken();
    const url = `${environment.backendApiBaseURL}/rubrics/`;

    let headers = this.apiService.createHttpHeaders();
    headers = headers.append('idtoken', idToken);

    const body = JSON.stringify(rubric);

    return new Promise<any>((resolve, reject) => {
      this.http.post(url, body, {headers}).toPromise()
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

}
