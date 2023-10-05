import { Controller } from '@nestjs/common';
import { TsRest, TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { myApiContract } from '../api.contract';
import { AuthService } from '@test/packages/auth/auth.service';


@Controller()
@TsRest({ validateResponses: true })
export class MyApiController {

  constructor(
    private readonly authService: AuthService,
  ) {
  }

  @TsRestHandler(myApiContract.helloWorld)
  async hello() {
    return tsRestHandler(myApiContract.helloWorld, async params => {
      await this.authService.test();
      return {
        status: 200,
        body: 'world',
      };
    });
  }
}
