import { IsNotEmpty, Length } from 'class-validator';

export class CreateRelationshipBody {
  @IsNotEmpty()
  @Length(11, 11)
  cpf1: string;

  @IsNotEmpty()
  @Length(11, 11)
  cpf2: string;
}
