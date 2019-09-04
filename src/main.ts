import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';
import { ApplicationContext } from './app.context';
import { ConfigService } from './modules/config/config.service';

async function bootstrap() {
  const app = await ApplicationContext();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(app.get(ConfigService).getInt('APP_PORT'));
}
bootstrap();
