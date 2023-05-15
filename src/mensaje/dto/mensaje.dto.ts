import { IsNotEmpty, MaxLength } from 'class-validator';
import { IsNotBlank } from 'src/decorators/is-not-blank.decorator';

export class MensajeDto {
  @IsNotBlank({ message: 'El titulo no puede estar vacío' })
  @MaxLength(80, { message: 'Ingresa un título más corto' })
  titulo: string;

  @IsNotEmpty()
  @IsNotBlank({ message: 'La descripcion no puede estar vacía' })
  @MaxLength(750, { message: 'Ingresa una descripción más corta' })
  descripcion: string;
}
