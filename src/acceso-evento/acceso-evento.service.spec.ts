import { Test, TestingModule } from '@nestjs/testing';
import { AccesoEventoService } from './acceso-evento.service';

describe('AccesoEventoService', () => {
  let service: AccesoEventoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccesoEventoService],
    }).compile();

    service = module.get<AccesoEventoService>(AccesoEventoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
