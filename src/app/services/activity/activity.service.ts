import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from 'src/app/models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private authService: AuthService,
    private http: HttpClient,
    private apiService: ApiService) { }

  getActivitiesByCourse(idCourse: string): Observable<any> {
    const tokens = this.authService.getTokens();
    const url = `${environment.backendApiBaseURL}/courses/` + idCourse + '/activities';

    let headers = this.apiService.createHttpHeaders();
    headers = headers.append('tokens', tokens);

    return this.http.get<Activity[]>(url, { headers });
  }
}
