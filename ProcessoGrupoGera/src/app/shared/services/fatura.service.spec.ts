import { TestBed } from '@angular/core/testing';

import { FaturaService } from './fatura.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Fatura } from '../models/fatura';
import { environment } from 'src/environments/environment';

describe('FaturaService', () => {
  let service: FaturaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(FaturaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get all faturas created', () => {
    const mock: Fatura[] = [
      {
          id: 1,
          valor: 345,
          consumo: 158,
          unidadeConsumidoraId: 2,
          data_de_vencimento: '25/03/2011'
      },
      {
          id: 2,
          valor: 1002,
          consumo: 489,
          unidadeConsumidoraId: 1,
          data_de_vencimento: '30/11/2018'
      }
  ];

  service.getAll()
  .subscribe(data => {
    expect(data[0].id).toEqual(mock[0].id);
    expect(data[1].id).toEqual(mock[1].id);
  });
  const request = httpTestingController.expectOne(`${environment.url}/Fatura`);

  expect(request.request.method).toEqual('GET');

  request.flush(mock);

  });

  it('should get one fatura created', () => {
    const mock: Fatura = 
      {
          id: 1,
          valor: 345,
          consumo: 158,
          unidadeConsumidoraId: 2,
          data_de_vencimento: '25/03/2011'
      };

  service.getById(1)
  .subscribe(data => {
    expect(data).toEqual(mock);
  });
  const request = httpTestingController.expectOne(`${environment.url}/Fatura/${1}`);

  expect(request.request.method).toEqual('GET');

  request.flush(mock);

  });

  it('add a new fatura', () => {
    const mock: Fatura = 
      {
          id: 1,
          valor: 345,
          consumo: 158,
          unidadeConsumidoraId: 2,
          data_de_vencimento: '25/03/2011'
      };

  service.addFatura(mock)
  .subscribe(data => {
    expect(data).toEqual(mock);
  });
  const request = httpTestingController.expectOne(`${environment.url}/Fatura`);

  expect(request.request.body.consumo).toEqual(mock.consumo);
  expect(request.request.method).toEqual('POST');

  request.flush(mock);

  });

  it('edit an existing fatura', () => {
    const mock: Fatura = 
      {
          id: 1,
          valor: 345,
          consumo: 158,
          unidadeConsumidoraId: 2,
          data_de_vencimento: '25/03/2011'
      };
      
  service.editFatura(mock.id, mock)
  .subscribe(data => {
    expect(data).toEqual(mock);
  });
  const request = httpTestingController.expectOne(`${environment.url}/Fatura/${mock.id}`);

  expect(request.request.body.consumo).toEqual(mock.consumo);
  expect(request.request.method).toEqual('PUT');

  request.flush(mock);

  });

  it('delete an existing fatura', () => {
  const id = 2;

  service.deleteFatura(id).subscribe();

  const request = httpTestingController.expectOne(`${environment.url}/Fatura/${id}`);

  expect(request.request.method).toEqual('DELETE');

  request.flush(id, { status: 200, statusText: 'success' });

  });


  afterEach (( ) => {
    httpTestingController.verify();
  })
});
