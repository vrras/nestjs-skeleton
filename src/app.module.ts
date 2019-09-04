import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './controllers/cat.controller';
import { CatService } from './services/cat.service';
import { ConfigModule } from './modules/config/config.module';
import { NameMiddleware } from './middleware/name.middleware';

@Module({
  imports: [ConfigModule],
  controllers: [
    AppController,
    CatController
  ],
  providers: [
    AppService,
    CatService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(NameMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.GET })
      .forRoutes(CatController);
  }
}
