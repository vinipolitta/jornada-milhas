import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface LoginData {
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(value: LoginData): Observable<LoginData> {
    const body = {
      email: value.email,
      senha: value.senha
    }
    console.log(body);

    // Simula chamada ao backend para realizar o login
    return this.http.post<LoginData>(`${this.apiUrl}/auth/login`, body);
  }
}
