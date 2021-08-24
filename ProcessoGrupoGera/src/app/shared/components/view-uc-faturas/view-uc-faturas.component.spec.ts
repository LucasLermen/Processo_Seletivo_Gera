import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUcFaturasComponent } from './view-uc-faturas.component';

describe('ViewUcFaturasComponent', () => {
  let component: ViewUcFaturasComponent;
  let fixture: ComponentFixture<ViewUcFaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUcFaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUcFaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
