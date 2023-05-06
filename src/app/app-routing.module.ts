import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';

const router:Routes=[
{
  path:'Inicio',
  component:PersonaComponent
}



]


@NgModule({
  imports: [
    [RouterModule.forRoot(router)]
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
