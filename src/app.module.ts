import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { AuthService } from '@test/packages/auth/auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: randomUUID(),
        };
      },
    }),
  ],
  providers: [
    AuthService,
  ],
})
export class AppModule {

}
