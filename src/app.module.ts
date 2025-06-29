import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuarioModule } from './usuario/usuario.module';
import { EventoModule } from './evento/evento.module';
import { InvitadoModule } from './invitado/invitado.module';
import { EnvioInvitacionModule } from './envio-invitacion/envio-invitacion.module';
import { AccesoEventoModule } from './acceso-evento/acceso-evento.module';
import { PagoModule } from './pago/pago.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'minombre12',
      database: 'eventos',
      autoLoadModels: true,
      synchronize: true, // solo en devs
      logging: true,
    }),
    UsuarioModule,
    EventoModule,
    InvitadoModule,
    EnvioInvitacionModule,
    AccesoEventoModule,
    PagoModule,
  ],
})
export class AppModule {}
