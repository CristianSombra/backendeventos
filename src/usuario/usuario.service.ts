import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './usuario.model';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) {}

  create(dto: CreateUsuarioDto) {
    return this.usuarioModel.create(dto);
  }

  findAll() {
    return this.usuarioModel.findAll();
  }

  findOne(id: string) {
    return this.usuarioModel.findByPk(id);
  }

  update(id: string, dto: UpdateUsuarioDto) {
    return this.usuarioModel.update(dto, { where: { id } });
  }

  remove(id: string) {
    return this.usuarioModel.destroy({ where: { id } });
  }
}
