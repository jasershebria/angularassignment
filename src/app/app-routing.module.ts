import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { PortifolioComponent } from './Components/portifolio/portifolio.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home",component:HomeComponent,pathMatch:"full"},
  {path:"about",component:AboutComponent,pathMatch:"full"},
  {path:"portifolio",component:PortifolioComponent,pathMatch:"full"},
  {path:"contact",component:ContactComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
