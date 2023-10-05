import { Module } from '@nestjs/common';
import { MyApiController } from './controller/my-api.controller';
import { AuthModule } from '@test/packages/auth/auth.module';

@Module({
  imports: [
    AuthModule,
  ],
  controllers: [MyApiController],
  providers: [],
})
export class MyApiModule {}
