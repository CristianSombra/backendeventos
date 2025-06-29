import { Module } from '@nestjs/common';
import { InvitadoController } from './invitado.controller';
import { InvitadoService } from './invitado.service';

@Module({
  controllers: [InvitadoController],
  providers: [InvitadoService],
})
export class InvitadoModule {}
