import { Controller, Delete } from '@nestjs/common';

import { CleanAllData } from '@app/use-cases';

@Controller()
export class GeneralController {
  constructor(private cleanAllData: CleanAllData) {}

  @Delete('clean')
  async clean() {
    await this.cleanAllData.execute();
  }
}
