import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnidadeConsumidoraService } from '../../services/unidade-consumidora.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit-uc-form',
  templateUrl: './add-edit-uc-form.component.html',
  styleUrls: ['./add-edit-uc-form.component.scss']
})
export class AddEditUcFormComponent implements OnInit {

  @Input() isAdd: boolean = false;
  @Input() editId: number = 0;
    
  formulario!: FormGroup;

  constructor(
    private unidadeConsumidoraService: UnidadeConsumidoraService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.configFormulario();
    
  }

  ngOnChanges() {
    if(!!this.editId){         
        this.configFormulario();         
    }
  }

  configFormulario() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      distribuidora: ['', Validators.required],
      numero: [null, Validators.required]
    });

  if (!this.isAdd) {
    this.unidadeConsumidoraService.getById(this.editId)
        .pipe(first())
        .subscribe(data => this.formulario.patchValue(data));
    }
  }

  onSubmit(){
    if (this.isAdd) {
      this.addUnidadeConsumidora();
    } else {
      this.updateUnidadeConsumidora();
    }
  }

  addUnidadeConsumidora(){
    if(confirm("Deseja confirmar adição dessa Unidade Consumidora?")) {
      this.unidadeConsumidoraService.addUnidadeConsumidora(this.formulario.value)
      .subscribe(() => {
        alert("Unidade consumidora adicionada com sucesso!")
        this.router.navigate(['/unidades-consumidoras']);
      },
      err => {
        let erro: string;

        switch (err.status){
          case 422:
            erro = 'Erro no objeto enviado';
            break;
          case 500:
            erro = 'Erro interno do servidor';
            break;
          default:
            erro = 'Erro desconhecido'
        }

        alert("Erro encontrado ao adicionar Unidade: " + erro + ". Tente novamente!")
      }
      
      )
    }
  }

  updateUnidadeConsumidora(){
    if(confirm("Deseja confirmar alteração de dados dessa Unidade Consumidora?")) {
      this.unidadeConsumidoraService.editUnidadeConsumidora(this.editId, this.formulario.value)
      .subscribe(() => {
        alert("Unidade consumidora atualizada com sucesso!")
        this.router.navigate(['/unidades-consumidoras']);
      },
      err => {
        let erro: string;

        switch (err.status){
          case 404:
            erro = 'Id informado não existe';
            break;
          case 500:
            erro = 'Erro interno do servidor';
            break;
          default:
            erro = 'Erro desconhecido'
        }
        alert("Erro encontrado ao editar Unidade: " + erro + ". Tente novamente!")
      }
      )
    }   
  }

}
