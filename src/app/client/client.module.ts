import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ClientComponent } from './client.component';
import { Routes } from '@angular/router';
const routes: Routes = [
  {path : 'site', component : ClientComponent}
];
@NgModule({
  declarations: [
    ClientComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    AboutModule
  ],
  exports: [
    ClientComponent,
    
  ]
})
export class ClientModule { }
