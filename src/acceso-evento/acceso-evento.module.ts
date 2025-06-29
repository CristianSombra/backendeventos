import { Module } from '@nestjs/common';
import { AccesoEventoController } from './acceso-evento.controller';
import { AccesoEventoService } from './acceso-evento.service';

@Module({
  controllers: [AccesoEventoController],
  providers: [AccesoEventoService],
})
export class AccesoEventoModule {}
