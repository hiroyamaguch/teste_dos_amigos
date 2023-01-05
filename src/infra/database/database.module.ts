import { PersonsRepository, RelationshipRepository } from '@app/repositories';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaPersonRepository } from './prisma/repositories/prisma-person-repository';
import { PrismaRelationshipRepository } from './prisma/repositories/prisma-relationship-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: PersonsRepository,
      useClass: PrismaPersonRepository,
    },
    {
      provide: RelationshipRepository,
      useClass: PrismaRelationshipRepository,
    },
  ],
  exports: [PersonsRepository, RelationshipRepository],
})
export class DatabaseModule {}
