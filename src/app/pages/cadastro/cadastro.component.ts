import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  public perfilComponent = false

  public cadastrar(event: Event) {
    console.log('realizado castrastro com sucesso', event);
  }
}
