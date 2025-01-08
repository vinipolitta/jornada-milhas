import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuService } from './core/services/menu.service';

const menuService = new MenuService();

const routes: Routes = [
  ...menuService.getRoutes(),
  { path: '**', redirectTo: '/home' } // Rota padrão
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
