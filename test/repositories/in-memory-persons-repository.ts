import { Person } from '@app/entities';
import { PersonsRepository } from '@app/repositories';

export class InMemoryPersonsRepository implements PersonsRepository {
  public persons: Person[] = [];

  async create(person: Person): Promise<void> {
    this.persons.push(person);
  }

  async findByCPF(cpf: string): Promise<Person | null> {
    const person = this.persons.find((person) => person.cpf == cpf);

    if (!person) {
      return null;
    }

    return person;
  }

  async clean(): Promise<void> {
    this.persons = [];
  }
}
