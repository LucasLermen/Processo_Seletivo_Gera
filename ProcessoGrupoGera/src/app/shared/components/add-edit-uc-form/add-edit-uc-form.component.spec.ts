import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUcFormComponent } from './add-edit-uc-form.component';

describe('AddEditUcFormComponent', () => {
  let component: AddEditUcFormComponent;
  let fixture: ComponentFixture<AddEditUcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
