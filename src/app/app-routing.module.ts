import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Semana1Component } from './components/semana1/semana1.component';
import { Semana2Component } from './components/semana2/semana2.component';
import { Semana3Component } from './components/semana3/semana3.component';
import { Semana4Component } from './components/semana4/semana4.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/semana1',
    pathMatch: 'full',
  },
  {
    path: 'semana1',
    component: Semana1Component
  },
  {
    path: 'semana2',
    component: Semana2Component
  },
  {
    path: 'semana3',
    component: Semana3Component
  },
  {
    path: 'semana4',
    component: Semana4Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
