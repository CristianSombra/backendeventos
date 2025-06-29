import { Module } from '@nestjs/common';
import { EnvioInvitacionController } from './envio-invitacion.controller';
import { EnvioInvitacionService } from './envio-invitacion.service';

@Module({
  controllers: [EnvioInvitacionController],
  providers: [EnvioInvitacionService],
})
export class EnvioInvitacionModule {}
