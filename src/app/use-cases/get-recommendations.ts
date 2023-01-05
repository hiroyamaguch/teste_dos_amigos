import { PersonsRepository, RelationshipRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';
import { PersonNotFound } from './errors';

interface GetRecommendationsRequest {
  cpf: string;
}

interface GetRecommendationsResponse {
  recommendations: string[];
}

@Injectable()
export class GetRecommendations {
  constructor(
    private personRepository: PersonsRepository,
    private relationShipRepository: RelationshipRepository,
  ) {}

  async execute(
    request: GetRecommendationsRequest,
  ): Promise<GetRecommendationsResponse> {
    const { cpf } = request;

    const person = await this.personRepository.findByCPF(cpf);

    if (!person) {
      throw new PersonNotFound();
    }

    const docs = await this.relationShipRepository.findRecommendationsByCPF(
      cpf,
    );

    return { recommendations: docs };
  }
}
