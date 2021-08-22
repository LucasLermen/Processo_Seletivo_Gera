import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesConsumidorasComponent } from './views/unidades-consumidoras/unidades-consumidoras.component';

const routes: Routes = [
  {
    path: '',
    component: UnidadesConsumidorasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
