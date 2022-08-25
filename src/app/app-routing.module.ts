import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProgramComponent} from "./create-program/create-program.component";

const routes: Routes = [
  { path: '', component: CreateProgramComponent},
  { path: 'create-program', loadChildren: () => import('./create-program/create-program.module').then((m) => m.CreateProgramModule)},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
