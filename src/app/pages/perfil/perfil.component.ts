import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  public perfilComponent = true;
  public titulo = 'Ola, X';
  public textoBtn = 'ATUALIZAR';

  deslogar() {
    console.log("Deslogar");

  }
  atualizar() {
    console.log("Atualizar");

  }
}
