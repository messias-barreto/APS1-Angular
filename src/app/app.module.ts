import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ApostasComponent } from './pages/apostas/apostas.component';
import { HomeComponent } from './pages/home/home.component';
import { CardApostadoresComponent } from './components/card-apostadores/card-apostadores.component';
import { RealizarApostasComponent } from './components/realizar-apostas/realizar-apostas.component';
import { FormsModule } from '@angular/forms';
import { GerarApostaSistemaComponent } from './components/gerar-aposta-sistema/gerar-aposta-sistema.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ApostasComponent,
    HomeComponent,
    CardApostadoresComponent,
    RealizarApostasComponent,
    GerarApostaSistemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
