import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from 'src/app/pages/login/login.component';

// Importação de componentes para as rotas

export interface MenuItem {
  label: string;
  type: 'text' | 'raised' | 'stroked';
  route: string;
  component: any;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    // { label: 'Vender milhas', type: 'text', route: '/vender-milhas', component: VenderMilhasComponent },
    // { label: 'Sobre', type: 'text', route: '/sobre', component: SobreComponent },
    // { label: 'CADASTRE-SE', type: 'raised', route: '/cadastro', component: CadastroComponent },
    { label: 'Home', type: 'text', route: '/home', component: HomeComponent},
    { label: 'LOGIN', type: 'stroked', route: '/login', component: LoginComponent }
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  getRoutes(): Routes {
    return this.menuItems.map(item => ({
      path: item.route.replace('/', ''),
      component: item.component
    }));
  }
}
