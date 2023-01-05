import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

export interface PersonProps {
  cpf: string;
  name: string;
  createdAt: Date;
}

export class Person {
  private _id: string;
  private props: PersonProps;

  private validateCPFLength(cpf: string): boolean {
    return cpf.length == 11;
  }

  constructor(props: Replace<PersonProps, { createdAt?: Date }>, id?: string) {
    const isCPFLengthValid = this.validateCPFLength(props.cpf);

    if (!isCPFLengthValid) {
      throw new Error('CPF length is invalid');
    }

    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get cpf(): string {
    return this.props.cpf;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
