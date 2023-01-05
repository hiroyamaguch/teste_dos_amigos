import { Person } from '@app/entities';
import { PersonsRepository } from '@app/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaPersonMapper } from '../mappers/prisma-person-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaPersonRepository implements PersonsRepository {
  constructor(private prisma: PrismaService) {}

  async create(person: Person): Promise<void> {
    const raw = PrismaPersonMapper.toPrisma(person);

    await this.prisma.person.create({
      data: raw,
    });
  }

  async findByCPF(cpf: string): Promise<Person | null> {
    const person = await this.prisma.person.findUnique({
      where: {
        cpf,
      },
    });

    if (!person) {
      return null;
    }

    return PrismaPersonMapper.toDomain(person);
  }

  async clean(): Promise<void> {
    await this.prisma.person.deleteMany();
  }
}
