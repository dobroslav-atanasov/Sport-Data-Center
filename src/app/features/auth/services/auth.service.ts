import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | undefined;

  constructor(private httpClient: HttpClient) {

  }

  signUp() {

  }

  signIn() {

  }

  logout() {
    
  }
}