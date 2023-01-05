import { Relationship } from '@app/entities';
import { RelationshipRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaRelationshipMapper } from '../mappers/prisma-relationship-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaRelationshipRepository implements RelationshipRepository {
  constructor(private prisma: PrismaService) {}

  async create(relationship: Relationship): Promise<void> {
    const raw = PrismaRelationshipMapper.toPrisma(relationship);

    await this.prisma.relationship.create({
      data: raw,
    });
  }

  async findRecommendationsByCPF(cpf: string): Promise<string[]> {
    const person = await this.prisma.person.findUnique({
      where: {
        cpf: cpf,
      },
      include: {
        relations1: {
          include: {
            person2: {
              include: {
                relations1: true,
              },
            },
          },
        },
      },
    });

    const recommendations = [];

    person.relations1.forEach((friend) => {
      friend.person2.relations1.forEach((friendRelation) => {
        recommendations.push(friendRelation.person2CPF);
      });
    });

    return recommendations;
  }
}
