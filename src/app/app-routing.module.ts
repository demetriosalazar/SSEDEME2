import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConvocatoriasPageComponent } from './convocatorias-page/convocatorias-page.component';
import { LoginGuard } from './login/login.guard';
import { MainPageComponent } from './main_page/main-page/main-page.component';
import { TalleresPageComponent } from './talleres-page/talleres-page.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"CONVOCATORIAS_PAGE",
    component:ConvocatoriasPageComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"MAIN_PAGE",
    component:MainPageComponent,
    canActivate: [LoginGuard]
  },
  {
    path:"TALLERES_PAGE",
    component:TalleresPageComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'**',
    redirectTo:"login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
