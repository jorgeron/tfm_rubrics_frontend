import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private authService: AuthService,
    private http: HttpClient,
    private apiService: ApiService) { }

    getStudentsByCourse(idCourse: string): Observable<any> {
      const tokens = this.authService.getTokens();
      const url = `${environment.backendApiBaseURL}/courses/` + idCourse + '/students';

      let headers = this.apiService.createHttpHeaders();
      headers = headers.append('tokens', tokens);

      return this.http.get<Student[]>(url, {headers});
    }
}
