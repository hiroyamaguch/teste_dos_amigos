import { Relationship } from '@app/entities';

export class RelationshipViewModel {
  static toHTTP(relationship: Relationship) {
    return {
      cpf1: relationship.cpf1,
      cpf2: relationship.cpf2,
    };
  }
}
