import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sh-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      },
      {
        label: this.authService.getUser()?.username,
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
