import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'O titulo deve ser uma string' })
  @IsNotEmpty({ message: 'O titulo não deve estar vazio' })
  @MinLength(5, { message: 'O titulo deve ter pelo menos 5 caracteres' })
  @IsOptional()
  readonly name?: string;

  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição não deve estar vazio' })
  @MinLength(5, { message: 'A descrição deve ter pelo menos 5 caracteres' })
  @MaxLength(100, { message: 'Número de caracteres máximo: 100' })
  @IsOptional()
  readonly description?: string;

  @IsBoolean()
  @IsOptional()
  readonly completed?: boolean;
}
