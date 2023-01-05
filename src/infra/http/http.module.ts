import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import {
  PersonsController,
  RecommendationsController,
  RelationshipController,
} from './controllers';
import {
  CreatePerson,
  CreateRelationship,
  GetPersonByCPF,
  GetRecommendations,
} from '@app/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [
    PersonsController,
    RelationshipController,
    RecommendationsController,
  ],
  providers: [
    CreatePerson,
    GetPersonByCPF,
    CreateRelationship,
    GetRecommendations,
  ],
})
export class HttpModule {}
