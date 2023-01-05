import { Person } from '@app/entities';
import { PersonsRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';
import { PersonNotFound } from './errors';

interface GetPersonByCPFRequest {
  cpf: string;
}

interface GetPersonByCPFResponse {
  person: Person;
}

@Injectable()
export class GetPersonByCPF {
  constructor(private personRepository: PersonsRepository) {}

  async execute(
    request: GetPersonByCPFRequest,
  ): Promise<GetPersonByCPFResponse> {
    const { cpf } = request;

    const person = await this.personRepository.findByCPF(cpf);

    if (!person) {
      throw new PersonNotFound();
    }

    return { person };
  }
}
