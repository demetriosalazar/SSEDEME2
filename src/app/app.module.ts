import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModalAgregarComponent } from './modal-agregar/modal-agregar.component';
import { ModalActualizarComponent } from './modal_actualizar/modal.component';
import { ConvocatoriasPageComponent } from './convocatorias-page/convocatorias-page.component';
import { MainPageComponent } from './main_page/main-page/main-page.component';
import { TalleresPageComponent } from './talleres-page/talleres-page.component';
import { ModalAgregarTallerComponent } from './modal-agregar-taller/modal-agregar-taller.component';
import { ModalActualizarTallerComponent } from './modal-actualizar-taller/modal-actualizar-taller.component';
import { PaginadorComponent } from './paginador/paginador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConvocatoriasPageComponent,
    ModalActualizarComponent,
    ModalAgregarComponent,
    MainPageComponent,
    TalleresPageComponent,
    ModalAgregarTallerComponent,
    ModalActualizarTallerComponent,
    PaginadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
