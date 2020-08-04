import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActorRoleGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      const expectedRole = next.data.expectedRole;
      const currentActor = this.authService.getCurrentActor();
      let result = false;
      console.log('currentActor in guard: ', currentActor);
      console.log('expectedRole in guard: ', expectedRole);
      if (currentActor) {
        const activeRole = new RegExp(currentActor.role.toString(), 'i');
        console.log('activeRole in guard: ', activeRole);
        if (expectedRole.search(activeRole) !== -1) {
          result = true;
        } else {
          this.router.navigate(['denied-access'], { queryParams: { previousURL: state.url } });
        }
        resolve(result);
      } else {
        if (expectedRole.indexOf('anonymous') !== -1) {
          result = true;
        } else {
          this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        }
        resolve(result);
      }
    });
  }
}
