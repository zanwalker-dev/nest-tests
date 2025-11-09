import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'O titulo deve ser uma string' })
  @IsNotEmpty({ message: 'O titulo não deve estar vazio' })
  @MinLength(5, { message: 'O titulo deve ter pelo menos 5 caracteres' })
  readonly name: string;

  readonly description: string;
}
