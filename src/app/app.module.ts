import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app

import localeEs from "@angular/common/locales/es-HN";
import localeFr from "@angular/common/locales/fr";

import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEs );
registerLocaleData( localeFr );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
