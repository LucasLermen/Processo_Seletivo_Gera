import { Component, OnInit } from '@angular/core';
import { FaturaService } from 'src/app/shared/services/fatura.service';
import { Fatura } from 'src/app/shared/models/fatura';

@Component({
  selector: 'app-fatura',
  templateUrl: './faturas.component.html',
  styleUrls: ['./faturas.component.scss']
})
export class FaturasComponent implements OnInit {

  faturas!: Fatura[];

  constructor(
    public faturaService: FaturaService
  ) { 
    this.faturaService.getAll()
      .subscribe((data: Fatura[]) => {
        this.faturas = data
      })     
  }

  ngOnInit(): void {
  }

}
