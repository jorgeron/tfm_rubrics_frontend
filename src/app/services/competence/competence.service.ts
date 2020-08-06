import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';
import { Competence } from 'src/app/models/competence.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient,
    private apiService: ApiService) { }

    getCompetencesByAreaId(idArea) {
      const url = `${environment.backendApiBaseURL}/areas/` + idArea + '/competences';
      const headers = this.apiService.createHttpHeaders();

      return this.http.get<Competence[]>(url, {headers}).toPromise();
    }
}
