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

  signOut() {

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


// export class AuthService {
//   private user!: IUser | null;
//   private jwtHelper = new JwtHelperService();

//   constructor(private httpClient: HttpClient) {
//     this.user = this.setUser();
//   }

//   register(model: IRegistration): Observable<any> {
//     return this.httpClient.post(ApiRouteConstants.USERS, model);
//   }

//   login(model: ILogin): Observable<any> {
//     return this.httpClient
//       .post(ApiRouteConstants.TOKENS_CREATE, model)
//       .pipe(
//         tap((res: any) => this.saveTokens(res))
//       );
//   }

//   logout() {
//     localStorage.removeItem(GlobalConstants.ACCESS_TOKEN);
//     localStorage.removeItem(GlobalConstants.REFRESH_TOKEN);
//     localStorage.removeItem(GlobalConstants.USERNAME);
//     this.user = null;
//   }

//   createRefreshToken(): Observable<any> {
//     const model: IRefreshToken = {
//       refreshToken: this.getRefreshToken(),
//       username: this.getUsername()
//     };

//     return this.httpClient.post(ApiRouteConstants.TOKENS_CREATE_REFRESH_TOKEN, model);
//   }

//   isLoggedIn(): boolean {
//     return this.user !== null && this.tokensExist();
//   }

//   getAccessToken(): string | null {
//     return localStorage.getItem(GlobalConstants.ACCESS_TOKEN);
//   }

//   getRefreshToken(): string | null {
//     return localStorage.getItem(GlobalConstants.REFRESH_TOKEN);
//   }

//   getUsername(): string | null {
//     return localStorage.getItem(GlobalConstants.USERNAME);
//   }

//   isTokenExpired(): boolean {
//     const accessToken = localStorage.getItem(GlobalConstants.ACCESS_TOKEN);
//     if (!accessToken) {
//       return true;
//     }

//     const isExpired = this.jwtHelper.isTokenExpired(accessToken);
//     return isExpired;
//   }

//   saveTokens(token: IToken) {
//     localStorage.setItem(GlobalConstants.ACCESS_TOKEN, token.accessToken);
//     localStorage.setItem(GlobalConstants.REFRESH_TOKEN, token.refreshToken);
//     localStorage.setItem(GlobalConstants.USERNAME, token.username);

//     this.user = this.setUser();
//   }

//   saveAccessToken(accessToken: string) {
//     localStorage.setItem(GlobalConstants.ACCESS_TOKEN, accessToken);
//   }

//   getUser(): IUser | null {
//     return this.user;
//   }

//   private setUser(): IUser | null {
//     const accessToken = localStorage.getItem(GlobalConstants.ACCESS_TOKEN);
//     if (accessToken) {
//       const payload = this.jwtHelper.decodeToken(accessToken);
//       const currentUser: IUser = {
//         id: payload[GlobalConstants.JWT_USER_ID],
//         username: payload[GlobalConstants.JWT_USERNAME],
//         role: payload[GlobalConstants.JWT_ROLE],
//         email: payload[GlobalConstants.JWT_EMAIL],
//       };

//       return currentUser;
//     }

//     return null;
//   }

//   private tokensExist(): boolean {
//     const accessToken = localStorage.getItem(GlobalConstants.ACCESS_TOKEN);
//     const refreshToken = localStorage.getItem(GlobalConstants.REFRESH_TOKEN);
//     const username = localStorage.getItem(GlobalConstants.USERNAME);

//     if (accessToken && refreshToken && username) {
//       return true;
//     }

//     return false;
//   }
// }
