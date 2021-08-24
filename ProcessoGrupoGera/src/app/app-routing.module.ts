import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesConsumidorasComponent } from './views/unidades-consumidoras/unidades-consumidoras.component';
import { FaturasComponent } from './views/faturas/faturas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'unidades-consumidoras',
    pathMatch: 'full'
  },
  {
    path: 'unidades-consumidoras',
    component: UnidadesConsumidorasComponent
  },
  {
      path: 'faturas',
      component: FaturasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
