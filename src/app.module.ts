import { Module } from '@nestjs/common';
import { MyApiModule } from './api.module';
import { AuthModule } from './packages/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MyApiModule
  ]
})
export class AppModule {

}
