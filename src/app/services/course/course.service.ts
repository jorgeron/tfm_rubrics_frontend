import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private authService: AuthService,
    private http: HttpClient,
    private apiService: ApiService) { }

    getCoursesByTeacher() {
      const tokens = this.authService.getTokens();
      const url = `${environment.backendApiBaseURL}/courses`;

      let headers = this.apiService.createHttpHeaders();
      headers = headers.append('tokens', tokens);

      return this.http.get<Course[]>(url, {headers}).toPromise();
    }
}
