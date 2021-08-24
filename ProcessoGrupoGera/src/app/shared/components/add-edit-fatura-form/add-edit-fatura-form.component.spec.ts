import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFaturaFormComponent } from './add-edit-fatura-form.component';

describe('AddEditFaturaFormComponent', () => {
  let component: AddEditFaturaFormComponent;
  let fixture: ComponentFixture<AddEditFaturaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
