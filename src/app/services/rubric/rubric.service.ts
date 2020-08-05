import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
}
