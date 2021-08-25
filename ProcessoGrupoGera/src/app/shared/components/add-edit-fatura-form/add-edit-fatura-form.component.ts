import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FaturaService } from '../../services/fatura.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-add-edit-fatura-form',
  templateUrl: './add-edit-fatura-form.component.html',
  styleUrls: ['./add-edit-fatura-form.component.scss']
})
export class AddEditFaturaFormComponent implements OnInit {

  @Input() isAdd: boolean = false;
  @Input() editId: number = 0;
  formulario!: FormGroup;

  constructor(
    private faturaService: FaturaService,
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
      data_de_vencimento: ['', Validators.required],
      consumo: ['', Validators.required],
      valor: ['', Validators.required],
      unidadeConsumidoraId: [null, Validators.required]
    });

  if (!this.isAdd) {
    this.faturaService.getById(this.editId)
        .pipe(first())
        .subscribe(data => this.formulario.patchValue(data));
    }
  }

  onSubmit(){
    if (this.isAdd) {
      this.addFatura();
    } else {
      this.updateFatura();
    }
  }

  addFatura(){
    if(confirm("Deseja confirmar adição dessa Fatura?")) {
      this.faturaService.addFatura(this.formulario.value)
      .subscribe(() => {
        alert("Fatura adicionada com sucesso!")
        this.router.navigate(['/faturas']);
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
        alert("Erro encontrado ao adicionar Fatura: " + erro + ". Tente novamente!")
        console.log(err);
      }
      
      )
    }
  }

  updateFatura(){
    if(confirm("Deseja confirmar alteração de dados dessa Fatura?")) {
      this.faturaService.editFatura(this.editId, this.formulario.value)
      .subscribe(() => {
        alert("Fatura atualizada com sucesso!")
        this.router.navigate(['/faturas']);
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

        alert("Erro encontrado ao editar Fatura: " + erro + ". Tente novamente!")
      }) 
    }
  }


}
