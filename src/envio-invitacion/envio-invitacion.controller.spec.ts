import { Test, TestingModule } from '@nestjs/testing';
import { EnvioInvitacionController } from './envio-invitacion.controller';

describe('EnvioInvitacionController', () => {
  let controller: EnvioInvitacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvioInvitacionController],
    }).compile();

    controller = module.get<EnvioInvitacionController>(
      EnvioInvitacionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
