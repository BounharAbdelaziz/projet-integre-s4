import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateparcelleComponent } from './components/updateparcelle/updateparcelle.component';

const routes: Routes = [
  { path : 'update' , component: UpdateparcelleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
