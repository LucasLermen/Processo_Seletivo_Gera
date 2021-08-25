import { Component, OnInit } from '@angular/core';
import { FaturaService } from 'src/app/shared/services/fatura.service';
import { Fatura } from 'src/app/shared/models/fatura';

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
    public faturaService: FaturaService
  ) { 

  }

  ngOnInit(): void {
    this.faturaService.getAll()
    .subscribe((data: Fatura[]) => {
      this.faturas = data
    })     
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
          this.ngOnInit();
        })
    }
  }

}
