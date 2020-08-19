import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private authService: AuthService,
    private http: HttpClient,
    private apiService: ApiService) { }

    getCoursesByTeacher() {
      const access_token = this.authService.getAccessToken();
      const tokens = this.authService.getTokens();
      const url = `${environment.backendApiBaseURL}/courses`;

      let headers = this.apiService.createHttpHeaders();
      headers = headers.append('access_token', access_token);
      headers = headers.append('tokens', tokens);

      return this.http.get<Object[]>(url, {headers}).toPromise();
    }
}
