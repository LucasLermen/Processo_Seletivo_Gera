import { Component, OnInit } from '@angular/core';
import { UnidadeConsumidoraService } from 'src/app/shared/services/unidade-consumidora.service';
import { UnidadeConsumidora } from 'src/app/shared/models/unidade-consumidora';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unidades-consumidoras',
  templateUrl: './unidades-consumidoras.component.html',
  styleUrls: ['./unidades-consumidoras.component.scss']
})
export class UnidadesConsumidorasComponent implements OnInit {

  unidadesConsumidoras!: UnidadeConsumidora[];
  formulario!: FormGroup;

  constructor(
    private unidadeConsumidoraService: UnidadeConsumidoraService,
    private formBuilder: FormBuilder,
  ) { 
  }
  
  ngOnInit(): void {
    this.configFormulario();
    this.unidadeConsumidoraService.getAll()
      .subscribe((data: UnidadeConsumidora[]) => {
        this.unidadesConsumidoras = data
      })     
  }
  configFormulario() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      distribuidora: ['', Validators.required],
      numero: [null, Validators.required]
    })
  }

 /* createUnidadeConservadoraForm(uc?: UnidadeConsumidora) {
    var form: UnidadeConsumidora;

    form = uc || { nome: '', endereco: '', numero: '', distribuidora: '' };

    this.unidadeConsumidoraForm = this.formBuilder.group({
      nome: [form.nome, [Validators.required, Validators.maxLength(50)]],
      endereco: [form.endereco, [Validators.required, Validators.maxLength(200)]],
      numero: [form.numero, [Validators.required, Validators.maxLength(20)]],
      distribuidora: [form.distribuidora, [Validators.required, Validators.maxLength(100)]]
    });
  }*/

  deleteUnidadeConsumidora(id: any, nome: string){
    if(confirm("Confirmar exclusão de " + nome + "?")){
      this.unidadeConsumidoraService.deleteUnidadeConsumidora(id)
        .subscribe(() => {
        }

        )
    }
  }

  onSubmit(){
    this.unidadeConsumidoraService.addUnidadeConsumidora(this.formulario.value)
    .subscribe(() => {
      this.ngOnInit;
    })
  }

}
