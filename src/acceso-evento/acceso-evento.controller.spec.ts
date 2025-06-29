import { Test, TestingModule } from '@nestjs/testing';
import { AccesoEventoController } from './acceso-evento.controller';

describe('AccesoEventoController', () => {
  let controller: AccesoEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccesoEventoController],
    }).compile();

    controller = module.get<AccesoEventoController>(AccesoEventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
