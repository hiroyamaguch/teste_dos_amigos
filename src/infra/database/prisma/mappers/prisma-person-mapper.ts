import { Person } from '@app/entities';
import { Person as RawPerson } from '@prisma/client';

export class PrismaPersonMapper {
  static toPrisma(person: Person) {
    return {
      id: person.id,
      cpf: person.cpf,
      name: person.name,
      createdAt: person.createdAt,
    };
  }

  static toDomain(raw: RawPerson): Person {
    return new Person(
      {
        cpf: raw.cpf,
        name: raw.name,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
