import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

export interface LoginData {
  email: string;
  senha: string;
}

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private userService: UserService) {}

  login(value: LoginData): Observable<HttpResponse<AuthResponse>> {
    const body = {
      email: value.email,
      senha: value.senha,
    };
    // Simula chamada ao backend para realizar o login
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/login`, body, {
        observe: 'response',
      })
      .pipe(
        tap((res) => {
          const authToken = res.body?.access_token || '';
          this.userService.salvarToken(authToken);
        })
      );
  }
}
