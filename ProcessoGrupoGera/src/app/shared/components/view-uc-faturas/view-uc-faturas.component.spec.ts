import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUcFaturasComponent } from './view-uc-faturas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewUcFaturasComponent', () => {
  let component: ViewUcFaturasComponent;
  let fixture: ComponentFixture<ViewUcFaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
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
