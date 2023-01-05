import { PersonsRepository, RelationshipRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';
import { PersonNotFound } from './errors';

interface GetRecommendationsRequest {
  cpf: string;
}

interface GetRecommendationsResponse {
  recommendations: string[];
}

interface RepeatI {
  label: string;
  number: number;
}

@Injectable()
export class GetRecommendations {
  constructor(
    private personRepository: PersonsRepository,
    private relationShipRepository: RelationshipRepository,
  ) {}

  private orderResultsByPoints(results: string[]) {
    const repeats: RepeatI[] = [];

    results.forEach((item) => {
      const indexOf = repeats.findIndex((repeat) => repeat.label == item);

      if (indexOf !== -1) {
        repeats[indexOf].number += 1;
      } else {
        repeats.push({
          label: item,
          number: 1,
        });
      }
    });

    repeats.sort((a, b) => {
      if (a.number > b.number) {
        return -1;
      } else if (a.number < b.number) {
        return 1;
      } else {
        return 0;
      }
    });

    const handled = repeats.map((repeat) => repeat.label);

    const ordered = handled.filter(
      (doc, index, array) => array.indexOf(doc) === index,
    );

    return ordered;
  }

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

    return { recommendations: this.orderResultsByPoints(docs) };
  }
}
