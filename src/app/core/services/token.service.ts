import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public salvarToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  public removerToken() {
    return localStorage.removeItem(KEY);
  }

  retornarToken() {
    return localStorage.getItem(KEY) ?? "";
  }

  possuiToken() {
    return !!this.retornarToken();
  }
}
