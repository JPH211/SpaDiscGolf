import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from './auth-res.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseInterface>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(tap((res) => {
        res.idToken
      }));
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseInterface>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
