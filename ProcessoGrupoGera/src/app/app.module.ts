import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UnidadesConsumidorasComponent } from './views/unidades-consumidoras/unidades-consumidoras.component';
import { FaturasComponent } from './views/faturas/faturas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditUcFormComponent } from './shared/components/add-edit-uc-form/add-edit-uc-form.component';
import { AddEditFaturaFormComponent } from './shared/components/add-edit-fatura-form/add-edit-fatura-form.component';
import { ViewUcFaturasComponent } from './shared/components/view-uc-faturas/view-uc-faturas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UnidadesConsumidorasComponent,
    FaturasComponent,
    AddEditUcFormComponent,
    AddEditFaturaFormComponent,
    ViewUcFaturasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
