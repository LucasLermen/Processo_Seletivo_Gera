import { Component, OnInit } from '@angular/core';
import { UnidadeConsumidoraService } from 'src/app/shared/services/unidade-consumidora.service';
import { UnidadeConsumidora } from 'src/app/shared/models/unidade-consumidora';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidades-consumidoras',
  templateUrl: './unidades-consumidoras.component.html',
  styleUrls: ['../../shared/styles/views.scss']
})
export class UnidadesConsumidorasComponent implements OnInit {

  unidadesConsumidoras!: UnidadeConsumidora[];
  isAdd: boolean = true;
  editId: number = 0;
  viewId: number = 0;

  constructor(
    private unidadeConsumidoraService: UnidadeConsumidoraService,
  ) { 
  }
  
  ngOnInit(): void {
    this.unidadeConsumidoraService.getAll()
      .subscribe((data: UnidadeConsumidora[]) => {
        this.unidadesConsumidoras = data
      })     
  }
  
  toAdd() {
    this.isAdd = true;
  }

  toEdit(id: any) {
    this.isAdd = false;
    this.editId = id;
  }

  saveViewId(id: any) {
    this.viewId = id;
    console.log(this.viewId);
  }


  deleteUnidadeConsumidora(id: any, nome: string) {
    if(confirm("Confirmar exclusão de " + nome + "?")) {
      this.unidadeConsumidoraService.deleteUnidadeConsumidora(id)
        .subscribe(() => {
          this.ngOnInit();
        })
    }
  }
}
