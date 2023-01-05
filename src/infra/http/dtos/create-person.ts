import { IsNotEmpty, Length } from 'class-validator';

export class CreatePersonBody {
  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  name: string;
}
