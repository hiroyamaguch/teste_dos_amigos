import { Person } from '@app/entities';
import { InMemoryPersonsRepository } from '@test/repositories/in-memory-persons-repository';
import { GetPersonByCPF } from './get-person-by-cpf';

describe('Get person by cpf', () => {
  it('should be able to find person by cpf', async () => {
    const personsRepository = new InMemoryPersonsRepository();
    const getPersonByCPF = new GetPersonByCPF(personsRepository);

    await personsRepository.create(
      new Person({ cpf: '12345678901', name: 'Pedro' }),
    );

    const { person } = await getPersonByCPF.execute({ cpf: '12345678901' });

    expect(person).toBeInstanceOf(Person);
  });
});
