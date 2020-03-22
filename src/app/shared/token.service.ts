import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  obtainAndPersistToken(): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}/people`, {})
      .pipe(
        tap(token => {
          localStorage.setItem('token', token.token);
        })
      );
  }

  getCurrentToken(): string {
    return localStorage.getItem('token');
  }
}
