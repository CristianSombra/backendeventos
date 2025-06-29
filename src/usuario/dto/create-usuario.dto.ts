import {
  IsString,
  IsEmail,
  IsOptional,
  IsUUID,
  IsBoolean,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  password_hash: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsString()
  rol: string;

  @IsOptional()
  @IsUUID()
  organizador_id?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
