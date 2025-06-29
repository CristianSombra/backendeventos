import { Test, TestingModule } from '@nestjs/testing';
import { EnvioInvitacionService } from './envio-invitacion.service';

describe('EnvioInvitacionService', () => {
  let service: EnvioInvitacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvioInvitacionService],
    }).compile();

    service = module.get<EnvioInvitacionService>(EnvioInvitacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
