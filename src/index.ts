import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const handler = async () => {
    console.log('initialising');
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
}

handler();
