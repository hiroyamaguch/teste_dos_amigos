import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreatePerson, GetPersonByCPF } from '@app/use-cases';
import { CreatePersonBody } from '../dtos';
import { PersonViewModel } from '../view-models';

@Controller('person')
export class PersonsController {
  constructor(
    private createPerson: CreatePerson,
    private getPersonByCPF: GetPersonByCPF,
  ) {}

  @Get(':cpf')
  async getFromCPF(@Param('cpf') cpf: string) {
    const { person } = await this.getPersonByCPF.execute({ cpf });

    return {
      ...PersonViewModel.toHTTP(person),
    };
  }

  @Post()
  async create(@Body() body: CreatePersonBody) {
    const { cpf, name } = body;

    const { person } = await this.createPerson.execute({ cpf, name });

    return {
      ...PersonViewModel.toHTTP(person),
    };
  }
}
