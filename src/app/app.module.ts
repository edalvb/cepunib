import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Angular Material

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

// Angular Material


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Semana1Component } from './components/semana1/semana1.component';
import { Semana2Component } from './components/semana2/semana2.component';
import { Semana3Component } from './components/semana3/semana3.component';
import { Semana4Component } from './components/semana4/semana4.component';

@NgModule({
  declarations: [
    AppComponent,
    Semana1Component,
    Semana2Component,
    Semana3Component,
    Semana4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
