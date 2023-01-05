import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import {
  GeneralController,
  PersonsController,
  RecommendationsController,
  RelationshipController,
} from './controllers';
import {
  CleanAllData,
  CreatePerson,
  CreateRelationship,
  GetPersonByCPF,
  GetRecommendations,
} from '@app/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [
    GeneralController,
    PersonsController,
    RelationshipController,
    RecommendationsController,
  ],
  providers: [
    CleanAllData,
    CreatePerson,
    CreateRelationship,
    GetPersonByCPF,
    GetRecommendations,
  ],
})
export class HttpModule {}
