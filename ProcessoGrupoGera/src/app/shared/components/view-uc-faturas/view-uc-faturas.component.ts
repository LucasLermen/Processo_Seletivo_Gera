import { Component, OnInit, Input } from '@angular/core';
import { UnidadeConsumidoraService } from '../../services/unidade-consumidora.service';
import { first } from 'rxjs/operators';
import { UnidadeConsumidora } from '../../models/unidade-consumidora';

@Component({
  selector: 'app-view-uc-faturas',
  templateUrl: './view-uc-faturas.component.html',
  styleUrls: ['./view-uc-faturas.component.scss']
})
export class ViewUcFaturasComponent implements OnInit {

  @Input() viewId: number = 0;
  unidadeConsumidora!: UnidadeConsumidora;

  constructor(
    private unidadeConsumidoraService: UnidadeConsumidoraService,
  ) { }

  ngOnInit(): void {
    this.unidadeConsumidora = {id: 0, nome: '', endereco: '', distribuidora: '', numero: '', faturas: []}
  }

  ngOnChanges() {     
    if(!!this.viewId){ 
      this.unidadeConsumidoraService.getById(this.viewId)
      .pipe(first())
      .subscribe((data: UnidadeConsumidora) => {
        this.unidadeConsumidora = data
      }) 
    }
  }


}
