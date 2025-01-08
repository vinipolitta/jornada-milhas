import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  buttons = [
    { label: 'Vender milhas', type: 'text', route: '/vender-milhas' },
    { label: 'Sobre', type: 'text', route: '/sobre' },
    { label: 'CADASTRE-SE', type: 'raised', route: '/cadastro' },
    { label: 'LOGIN', type: 'stroked', route: '/login' }
  ];
}
