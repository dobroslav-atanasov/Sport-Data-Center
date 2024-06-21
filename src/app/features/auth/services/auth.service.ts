import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { UserSignIn } from '../interfaces/user-sign-in';
import { UserSignUp } from '../interfaces/user-sign-up';
import { Observable, tap } from 'rxjs';
import { GlobalConstants } from '../../../core/constants/global-constants';
import { ApiRouteConstants } from '../../../core/constants/api-route-constants';
import { Token } from '../interfaces/token';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RefreshToken } from '../interfaces/refresh-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User | undefined;
  private jwtService = new JwtHelperService();

  constructor(private httpClient: HttpClient) {

  }

  signUp(model: UserSignUp) {
    return this.httpClient.post(ApiRouteConstants.USERS, model);
  }

  signIn(model: UserSignIn) {
    return this.httpClient
      .post(ApiRouteConstants.TOKENS_CREATE, model)
      .pipe(
        tap((res: any) => this.saveTokens(res))
      );
  }

  setUser(): User | undefined {
    const accessToken = localStorage.getItem(GlobalConstants.ACCESS_TOKEN);

    if (accessToken) {
      const payload = this.jwtService.decodeToken(accessToken);
      const currentUser: User = {
        id: payload[GlobalConstants.JWT_USER_ID],
        email: payload[GlobalConstants.JWT_ROLE],
        role: payload[GlobalConstants.JWT_ROLE],
        username: payload[GlobalConstants.JWT_USERNAME]
      };

      return currentUser;
    }

    return undefined;
  }

  signOut() {
    localStorage.removeItem(GlobalConstants.ACCESS_TOKEN);
    localStorage.removeItem(GlobalConstants.REFRESH_TOKEN);
    localStorage.removeItem(GlobalConstants.USERNAME);
    this.user = undefined;
  }

  isLoggedIn() {
    return this.user !== undefined && this.tokensExist();
  }

  getAccessToken(): string | undefined {
    throw new Error('Method not implemented.');
  }

  createRefreshToken(): Observable<any> {
    const model = JSON.stringify(
      {
        refreshToken: localStorage.getItem(GlobalConstants.REFRESH_TOKEN),
        username: this.user?.username
      });
      
    return this.httpClient.post(ApiRouteConstants.TOKENS_CREATE_REFRESH_TOKEN, model);
  }

  saveAccessToken(accessToken: string) {
    localStorage.setItem(GlobalConstants.ACCESS_TOKEN, accessToken);
  }

  getUser(): User | undefined {
    return this.user;
  }

  isTokenExpired() {
    const accessToken = localStorage.getItem(GlobalConstants.ACCESS_TOKEN);
    if (!accessToken) {
      return true;
    }

    return this.jwtService.isTokenExpired(accessToken);
  }

  private tokensExist() {
    const accessToken = localStorage.getItem(GlobalConstants.ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(GlobalConstants.REFRESH_TOKEN);
    const username = localStorage.getItem(GlobalConstants.USERNAME);

    return accessToken && refreshToken && username;
  }

  private saveTokens(token: Token) {
    localStorage.setItem(GlobalConstants.ACCESS_TOKEN, token.accessToken);
    localStorage.setItem(GlobalConstants.REFRESH_TOKEN, token.refreshToken);
    localStorage.setItem(GlobalConstants.USERNAME, token.username);

    this.user = this.setUser();
  }
}