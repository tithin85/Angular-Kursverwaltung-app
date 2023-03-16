import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'online Kursverwaltung';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  showLink: boolean = true;

  constructor(private tokenStorageService: TokenStorageService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get<number>('http://localhost:8080/api/auth/count').subscribe(count => {
    //   console.log('Count: ' + count);
    //   this.showLink = count < 1;
    //
    // });
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
