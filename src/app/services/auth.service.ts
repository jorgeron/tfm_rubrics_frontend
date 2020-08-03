import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Actor } from '../models/actor.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentActor: Actor;
  public userLoggedIn = new Subject();

  constructor(private fireAuth: AngularFireAuth,
    private http: HttpClient) { }


  public registerUser(actor: Actor) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.createUserWithEmailAndPassword(actor.email, actor.password)
        .then(_ => {
          // if auth was ok, then proceed
          const headers = new HttpHeaders();
          headers.append('Content-Type', 'application/json');
          const url = `${environment.backendApiBaseURL + '/actors'}`;
          const body = JSON.stringify(actor);
          this.http.post(url, body, httpOptions).toPromise()
            .then(res => {
              this.userLoggedIn.next(false);
              //this.messageService.notifyMessage('messages.auth.registration.correct', 'alert alert-success');
              resolve(res);
            }, err => {
              this.userLoggedIn.next(false);
              //this.messageService.notifyMessage('errorMessages.auth.registration.failed', 'alert alert-danger');
              reject(err);
            });
        }).catch(err => {
          //this.messageService.notifyMessage('errorMessages.auth.registration.failed', 'alert alert-danger');
          reject(err);
        });
    });
  }


  login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(_ => {
          const url = environment.backendApiBaseURL + '/login?email=' + email + '&password=' + password;
          this.http.get<Actor>(url).toPromise()
            .then((actor: Actor) => {
              this.currentActor = actor;
              localStorage.setItem('currentActorEmail', actor.email);
              localStorage.setItem('currentActor', JSON.stringify(actor));
              console.log('login to localstore: ' + JSON.stringify(actor));
              this.userLoggedIn.next(true);
              //this.messageService.notifyMessage('messages.auth.login.correct', 'alert alert-success');
              resolve(this.currentActor);
            }).catch(error => {
              //this.messageService.notifyMessage('errorMessages.auth.login.incorrect', 'alert alert-danger');
              reject(error);
            });
        }).catch(error => {
          //this.messageService.notifyMessage('errorMessages.auth.login.incorrect.credentials', 'alert alert-danger');
          reject(error);
        });
    });
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signOut()
        .then(_ => {
          this.currentActor = null;
          localStorage.removeItem('currentActorEmail');
          localStorage.removeItem('idToken');
          localStorage.removeItem('currentActor');
          this.userLoggedIn.next(false);
          //this.messageService.notifyMessage('messages.auth.logout', 'alert alert-success');
          resolve();
        }).catch(error => {
          //this.messageService.notifyMessage('errorMessages.auth.logout.failed', 'alert alert-danger');
          reject(error);
        });
    });
  }
}
