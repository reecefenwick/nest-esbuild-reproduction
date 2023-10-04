import {NestFactory} from "@nestjs/core";
import { AppModule } from './app.module';
import { AuthService } from './packages/auth/auth.service';

const handler = async () => {
    const app = await NestFactory.create(AppModule);

    const authService = app.get(AuthService);

    authService.test();
}

handler();
