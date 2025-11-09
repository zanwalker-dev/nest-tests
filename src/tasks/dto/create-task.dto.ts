import { IsEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsEmpty()
  @MinLength(5)
  readonly name: string;

  readonly description: string;
}
