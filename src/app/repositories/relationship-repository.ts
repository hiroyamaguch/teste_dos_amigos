import { Relationship } from '@app/entities';

export abstract class RelationshipRepository {
  abstract create(relationship: Relationship): Promise<void>;
  abstract findRecommendationsByCPF(cpf: string): Promise<string[]>;
}
