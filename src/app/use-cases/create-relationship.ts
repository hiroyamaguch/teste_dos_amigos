import { Relationship } from '@app/entities';
import { PersonsRepository, RelationshipRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';
import { PersonNotFound } from './errors';

interface CreateRelationshipRequest {
  cpf1: string;
  cpf2: string;
}

interface CreateRelationshipResponse {
  relationship: Relationship;
}

@Injectable()
export class CreateRelationship {
  constructor(
    private relationShipRepository: RelationshipRepository,
    private personsRepository: PersonsRepository,
  ) {}

  async execute(
    request: CreateRelationshipRequest,
  ): Promise<CreateRelationshipResponse> {
    const { cpf1, cpf2 } = request;

    const checkCPF1 = await this.personsRepository.findByCPF(cpf1);
    const checkCPF2 = await this.personsRepository.findByCPF(cpf2);

    if (!checkCPF1 || !checkCPF2) {
      throw new PersonNotFound();
    }

    const relationship = new Relationship({
      cpf1,
      cpf2,
    });

    await this.relationShipRepository.create(relationship);

    return { relationship };
  }
}
