import { Person } from '../entities/person';

export abstract class PersonsRepository {
  abstract create(person: Person): Promise<void>;
  abstract findByCPF(cpf: string): Promise<Person | null>;
  abstract clean(): Promise<void>;
}
