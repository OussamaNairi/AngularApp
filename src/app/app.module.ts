import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component';

import { GestionService } from './gestion.service';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
