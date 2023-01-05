import { Controller, Get, Param } from '@nestjs/common';

import { GetRecommendations } from '@app/use-cases';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private getRecommendations: GetRecommendations) {}

  @Get(':cpf')
  async getFromCPF(@Param('cpf') cpf: string) {
    const { recommendations } = await this.getRecommendations.execute({ cpf });

    return [...recommendations];
  }
}
