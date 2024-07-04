import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sh-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, OnChanges {

  items: MenuItem[] | undefined;
  username: string | undefined;

  constructor(private authService: AuthService) {
    this.username = authService.getUser()?.username;
  }

  ngOnChanges(): void {
    if (this.authService.isTokenExpired()) {
      console.log(2);
    }
    else {
      console.log(1);
    }
  }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Olympic Games',
        icon: 'pi pi-discord',
        items: [
          {
            label: 'Games',
          }
        ]
      },
      {
        label: this.username,
        icon: 'pi pi-user',
        // style: { 'margin-left': 'auto' },
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            routerLink: 'auth/profile'
          },
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            routerLink: 'auth/settings'
          },
          {
            separator: true
          },
          {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            routerLink: 'auth/logout'
          }
        ]
      }
    ]
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
