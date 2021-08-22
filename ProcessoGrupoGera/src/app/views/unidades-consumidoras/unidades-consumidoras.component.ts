import { Component, OnInit } from '@angular/core';
import { UnidadeConsumidoraService } from 'src/app/shared/services/unidade-consumidora.service';
import { UnidadeConsumidora } from 'src/app/shared/models/unidade-consumidora';

@Component({
  selector: 'app-unidades-consumidoras',
  templateUrl: './unidades-consumidoras.component.html',
  styleUrls: ['./unidades-consumidoras.component.scss']
})
export class UnidadesConsumidorasComponent implements OnInit {

  unidadesConsumidoras!: UnidadeConsumidora[];


  constructor(
    public unidadeConsumidoraService: UnidadeConsumidoraService
  ) { 
    this.unidadeConsumidoraService.getAll()
      .subscribe((data: UnidadeConsumidora[]) => {
        this.unidadesConsumidoras = data
      })     
  }

  ngOnInit(): void {
  }

}
