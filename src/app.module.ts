import { Module } from '@nestjs/common';
import { AuthService } from '@test/packages/auth/auth.service';
import { AuthModule } from '@test/packages/auth/auth.module';
import { MyApiModule } from './api.module';

@Module({
  imports: [
    AuthModule,
    MyApiModule
  ]
})
export class AppModule {

}
