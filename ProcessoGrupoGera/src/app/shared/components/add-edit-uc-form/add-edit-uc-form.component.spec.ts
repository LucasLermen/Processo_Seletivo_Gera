import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUcFormComponent } from './add-edit-uc-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddEditUcFormComponent', () => {
  let component: AddEditUcFormComponent;
  let fixture: ComponentFixture<AddEditUcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ AddEditUcFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
