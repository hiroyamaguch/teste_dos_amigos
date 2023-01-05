import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

export interface RelationshipProps {
  cpf1: string;
  cpf2: string;
  createdAt: Date;
}

export class Relationship {
  private _id: string;
  private props: RelationshipProps;

  private validateCPFLength(cpf: string): boolean {
    return cpf.length == 11;
  }

  constructor(
    props: Replace<RelationshipProps, { createdAt?: Date }>,
    id?: string,
  ) {
    const isCPF1LengthValid = this.validateCPFLength(props.cpf1);
    const isCPF2LengthValid = this.validateCPFLength(props.cpf2);

    if (!isCPF1LengthValid || !isCPF2LengthValid) {
      throw new Error('CPF length is invalid');
    }

    if (props.cpf1 == props.cpf2) {
      throw new Error('Same CPF is invalid');
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

  public get cpf1(): string {
    return this.props.cpf1;
  }

  public get cpf2(): string {
    return this.props.cpf2;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
