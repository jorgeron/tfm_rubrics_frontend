import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';
import { Area } from 'src/app/models/area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient,
    private apiService: ApiService) { }

  getAllAreas() {
    const url = `${environment.backendApiBaseURL}/areas/`;
    const headers = this.apiService.createHttpHeaders();

    return this.http.get<Area[]>(url, {headers}).toPromise();
  }
}
