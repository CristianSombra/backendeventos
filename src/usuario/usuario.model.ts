import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  ForeignKey,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';

// attributes
interface UsuarioAttributes {
  id: string;
  nombre: string;
  email: string;
  password_hash: string;
  telefono?: string;
  rol: string;
  organizador_id?: string;
  fecha_creacion?: Date;
  activo?: boolean;
}

// creation attributes
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UsuarioCreationAttributes
  extends Optional<UsuarioAttributes, 'id' | 'fecha_creacion' | 'activo'> {}

@Table
export class Usuario extends Model<
  UsuarioAttributes,
  UsuarioCreationAttributes
> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @Column(DataType.STRING)
  nombre: string;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column(DataType.STRING)
  password_hash: string;

  @Column(DataType.STRING)
  telefono: string;

  @Column(DataType.STRING)
  rol: string;

  @ForeignKey(() => Usuario)
  @Column({ type: DataType.UUID, allowNull: true })
  organizador_id: string;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  fecha_creacion: Date;

  @Default(true)
  @Column(DataType.BOOLEAN)
  activo: boolean;
}
