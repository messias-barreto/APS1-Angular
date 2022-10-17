import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import  { ApostasComponent }  from './pages/apostas/apostas.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'apostas', component: ApostasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
