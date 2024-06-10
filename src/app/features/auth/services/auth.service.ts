import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { UserSignIn } from '../interfaces/user-sign-in';
import { UserSignUp } from '../interfaces/user-sign-up';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | undefined;

  constructor(private httpClient: HttpClient) {

  }

  signUp(model: UserSignUp) {

  }

  signIn(model: UserSignIn) {

  }

  logout() {

  }

  isLoggedIn() {
    return true;
  }

  getAccessToken(): string | undefined {
    throw new Error('Method not implemented.');
  }

  createRefreshToken(): Observable<any> {
    throw new Error('Method not implemented.');
  }

  saveAccessToken(accessToken: string) {
    throw new Error('Method not implemented.');
  }
}