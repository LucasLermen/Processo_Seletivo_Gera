import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFaturaFormComponent } from './add-edit-fatura-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddEditFaturaFormComponent', () => {
  let component: AddEditFaturaFormComponent;
  let fixture: ComponentFixture<AddEditFaturaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ AddEditFaturaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFaturaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
