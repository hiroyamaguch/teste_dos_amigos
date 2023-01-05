import { PersonsRepository, RelationshipRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CleanAllData {
  constructor(
    private personRepository: PersonsRepository,
    private relationShipRepository: RelationshipRepository,
  ) {}

  async execute(): Promise<void> {
    await this.relationShipRepository.clean();
    await this.personRepository.clean();
  }
}
