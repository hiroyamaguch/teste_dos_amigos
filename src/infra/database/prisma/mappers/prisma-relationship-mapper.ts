import { Relationship } from '@app/entities';
import { Relationship as RawRelationship } from '@prisma/client';

export class PrismaRelationshipMapper {
  static toPrisma(relationship: Relationship) {
    return {
      id: relationship.id,
      person1CPF: relationship.cpf1,
      person2CPF: relationship.cpf2,
      createdAt: relationship.createdAt,
    };
  }

  static toDomain(raw: RawRelationship): Relationship {
    return new Relationship(
      {
        cpf1: raw.person1CPF,
        cpf2: raw.person2CPF,
      },
      raw.id,
    );
  }
}
