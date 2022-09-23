import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { ExampleMiddleware } from './middleware/example.middleware';
import { UserService } from './service/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes('user');
  }
}
