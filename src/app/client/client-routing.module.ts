import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
const routes: Routes = [
  {path : 'site', component : ClientComponent , children :[
  {path : 'home' , component : HomeComponent} , 
  {path : 'about' , component : AboutComponent}]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
