import { CreateRelationship } from '@app/use-cases';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateRelationshipBody } from '../dtos';
import { RelationshipViewModel } from '../view-models/relationship-view-model';

@Controller('relationship')
export class RelationshipController {
  constructor(private createRelationship: CreateRelationship) {}

  @Post()
  async create(@Body() body: CreateRelationshipBody) {
    const { cpf1, cpf2 } = body;

    const { relationship } = await this.createRelationship.execute({
      cpf1,
      cpf2,
    });

    return {
      ...RelationshipViewModel.toHTTP(relationship),
    };
  }
}
