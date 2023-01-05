import { Person } from '@app/entities';
import { PersonsRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';
import { PersonWithSameCPF } from './errors';

interface CreatePersonRequest {
  cpf: string;
  name: string;
}

interface CreatePersonResponse {
  person: Person;
}

@Injectable()
export class CreatePerson {
  constructor(private personsRepository: PersonsRepository) {}

  async execute(request: CreatePersonRequest): Promise<CreatePersonResponse> {
    const { cpf, name } = request;

    const hasPersonWithSameCPF = await this.personsRepository.findByCPF(cpf);

    if (hasPersonWithSameCPF) {
      throw new PersonWithSameCPF();
    }

    const person = new Person({
      cpf,
      name,
    });

    await this.personsRepository.create(person);

    return { person };
  }
}
