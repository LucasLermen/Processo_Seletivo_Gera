import { TestBed } from '@angular/core/testing';

import { UnidadeConsumidoraService } from './unidade-consumidora.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UnidadeConsumidora } from '../models/unidade-consumidora';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

describe('UnidadeConsumidoraService', () => {
  let service: UnidadeConsumidoraService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(UnidadeConsumidoraService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should get all Unidades Consumidoras created', () => {
    const mock: UnidadeConsumidora[] = [
      {
          id: 1,
          endereco: 'Botafogo, sala 215',
          distribuidora: 'Red',
          nome: 'Unidade Teste',
          numero: '4534656'
      },
      {
          id: 2,
          endereco: 'Rua das dores',
          distribuidora: 'Blue',
          nome: 'Unidade Produção',
          numero: '4534656'
      }
  ];

  service.getAll()
  .subscribe(data => {
    expect(data[0].id).toEqual(mock[0].id);
    expect(data[1].id).toEqual(mock[1].id);
  });
  const request = httpTestingController.expectOne(`${environment.url}/UnidadeConsumidora`);

  expect(request.request.method).toEqual('GET');

  request.flush(mock);

  });

  it('should get one Unidade Consumidora created', () => {
    const mock: UnidadeConsumidora = 
      {
        id: 1,
        endereco: 'Botafogo, sala 215',
        distribuidora: 'Red',
        nome: 'Unidade Teste',
        numero: '4534656'
      };

  service.getById(1)
  .subscribe(data => {
    expect(data).toEqual(mock);
  });
  const request = httpTestingController.expectOne(`${environment.url}/UnidadeConsumidora/${1}`);

  expect(request.request.method).toEqual('GET');

  request.flush(mock);

  });

  it('add a new Unidade Consumidora', () => {
    const mock: UnidadeConsumidora = 
      {
        id: 1,
        endereco: 'Botafogo, sala 215',
        distribuidora: 'Red',
        nome: 'Unidade Teste',
        numero: '4534656'
      };

  service.addUnidadeConsumidora(mock)
  .subscribe(data => {
    expect(data).toEqual(mock);
  });
  const request = httpTestingController.expectOne(`${environment.url}/UnidadeConsumidora`);

  expect(request.request.body.distribuidora).toEqual(mock.distribuidora);
  expect(request.request.method).toEqual('POST');

  request.flush(mock);

  });

  it('edit an existing Unidade Consumidora', () => {
    const mock: UnidadeConsumidora = 
      {
        id: 1,
        endereco: 'Botafogo, sala 215',
        distribuidora: 'Red',
        nome: 'Unidade Teste',
        numero: '4534656'
      };
  service.editUnidadeConsumidora(mock.id, mock)
  .subscribe(data => {
    expect(data).toEqual(mock);
  });
  const request = httpTestingController.expectOne(`${environment.url}/UnidadeConsumidora/${mock.id}`);

  expect(request.request.body.distribuidora).toEqual(mock.distribuidora);
  expect(request.request.method).toEqual('PUT');

  request.flush(mock);

  });

  it('delete an existing Unidade Consumidora', () => {
  const id = 2;

  service.deleteUnidadeConsumidora(id).subscribe();

  const request = httpTestingController.expectOne(`${environment.url}/UnidadeConsumidora/${id}`);

  expect(request.request.method).toEqual('DELETE');

  request.flush(id, { status: 200, statusText: 'success' });

  });



  afterEach (( ) => {
    httpTestingController.verify();
  })
});
