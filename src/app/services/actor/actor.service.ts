import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private apiService: ApiService,
    private fireAuth: AngularFireAuth) { }

}
