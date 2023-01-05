import { Person } from '@app/entities';

export class PersonViewModel {
  static toHTTP(person: Person) {
    return {
      cpf: person.cpf,
      name: person.name,
    };
  }
}
