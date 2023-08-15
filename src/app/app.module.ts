import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardComponent } from './shared/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './shared/container/container.component';
import { CardDepoimentoComponent } from './shared/card-depoimento/card-depoimento.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';

const imports = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
];

const declarations = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  BannerComponent,
  CardComponent,
  HomeComponent,
  ContainerComponent,
  CardDepoimentoComponent,
  CardBuscaComponent,
  FormBuscaComponent
]
@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...imports,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
