import { TestBed } from '@angular/core/testing';

import { UnidadeConsumidoraService } from './unidade-consumidora.service';

describe('UnidadeConsumidoraService', () => {
  let service: UnidadeConsumidoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadeConsumidoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
