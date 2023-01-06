import { Person } from '@app/entities';
import { InMemoryPersonsRepository } from '@test/repositories/in-memory-persons-repository';
import { CreatePerson } from './create-person';
import { PersonWithSameCPF } from './errors';

describe('Create person', () => {
  it('should be able to create person', async () => {
    const personsRepository = new InMemoryPersonsRepository();
    const createPerson = new CreatePerson(personsRepository);

    const person = new Person({ cpf: '12345678901', name: 'Pedro' });

    await createPerson.execute(person);

    expect(personsRepository.persons[0].createdAt).toEqual(expect.any(Date));
  });

  it('should not be able to create person with same cpf', async () => {
    const personsRepository = new InMemoryPersonsRepository();
    const createPerson = new CreatePerson(personsRepository);

    const person = new Person({ cpf: '12345678901', name: 'Pedro' });

    await createPerson.execute(person);

    expect(() => createPerson.execute(person)).rejects.toBeInstanceOf(
      PersonWithSameCPF,
    );
  });
});
