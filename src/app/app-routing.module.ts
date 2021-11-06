import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './crud/create/create.component';
import { DisplayComponent } from './crud/create/display/display.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full'},
  {
    path: 'display',
    component: DisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
