import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService,
              private userService: UserService,
              private router: Router) {}

  canActivate(): boolean {
    const token = this.tokenStorageService.getToken();
    if (token) {
      // Wenn der Benutzer ein Token hat, prüfen wir, ob der Benutzer auf die angeforderte Route zugreifen darf
      const user = this.tokenStorageService.getUser();
      switch (user.roles[0]) { // Hier wird angenommen, dass der Benutzer nur eine Rolle hat
        case 'ROLE_USER':
          return true; // Der Benutzer hat Zugriff auf die Route '/user'
        case 'ROLE_MODERATOR':
          return true; // Der Benutzer hat Zugriff auf die Route '/mod'
        case 'ROLE_ADMIN':
          return true; // Der Benutzer hat Zugriff auf die Route '/admin'
        default:
          return false; // Der Benutzer hat keine gültige Rolle
      }
    } else {
      // Wenn der Benutzer kein Token hat, wird er auf die Anmeldeseite umgeleitet
      //this.router.navigate(['/login']);
      this.router.navigateByUrl('/login').then(() => {
        // Do something
      });
      return false;
    }
  }
}
