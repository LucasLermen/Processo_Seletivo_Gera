import { Component, OnInit, Input } from '@angular/core';
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
    this.unidadeConsumidoraService.addUnidadeConsumidora(this.formulario.value)
    .subscribe(() => {
      this.router.navigate(['/unidades-consumidoras']);
    })
  }

  updateUnidadeConsumidora(){
    this.unidadeConsumidoraService.editUnidadeConsumidora(this.editId, this.formulario.value)
    .subscribe(() => {
      this.router.navigate(['/unidades-consumidoras']);
    })   
  }

}
