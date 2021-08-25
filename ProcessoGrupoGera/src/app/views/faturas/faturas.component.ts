import { Component, OnInit } from '@angular/core';
import { FaturaService } from 'src/app/shared/services/fatura.service';
import { Fatura } from 'src/app/shared/models/fatura';
import { UnidadeConsumidoraService } from 'src/app/shared/services/unidade-consumidora.service';
import { UnidadeConsumidora } from 'src/app/shared/models/unidade-consumidora';

@Component({
  selector: 'app-fatura',
  templateUrl: './faturas.component.html',
  styleUrls: ['../../shared/styles/views.scss']
})
export class FaturasComponent implements OnInit {

  faturas!: Fatura[];
  isAdd: boolean = true;
  editId: number = 0;

  constructor(
    private faturaService: FaturaService,
    private unidadeConsumidoraService: UnidadeConsumidoraService,
  ) { 

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.faturaService.getAll()
    .subscribe((data: Fatura[]) => {
      this.faturas = data;

      let unidadesConsumidoras: UnidadeConsumidora[];
      this.unidadeConsumidoraService.getAll()
        .subscribe(data => {
          unidadesConsumidoras = data;

          this.faturas.forEach(fatura => {
            fatura.nomeUC = unidadesConsumidoras
            .filter((uc) => {
              return uc.id == fatura.unidadeConsumidoraId;
            })[0].nome;
          })
      });  
    });
  }

  editToAdd(){
    this.isAdd = true;
  }

  addToEdit(id: any){
    this.isAdd = false;
    this.editId = id;
  }


  deleteFatura(id: any){
    if(confirm("Confirmar exclusão da fatura " + id + "?")){
      this.faturaService.deleteFatura(id)
        .subscribe(() => {
          alert("Fatura "+ id + " deletada com sucesso!")
          this.ngOnInit();
        },
        err => {
          let erro: string;

          switch (err.status){
            case 422:
              erro = 'Id de Unidade Consumidora informado não existe';
              break;
            case 500:
              erro = 'Erro interno do servidor';
              break;
            default:
              erro = 'Erro desconhecido'
          }
          

          alert("Erro encontrado ao excluir Fatura: " + erro + ". Tente novamente!")
        }
        )
    }
  }

}
