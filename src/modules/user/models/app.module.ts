import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserModule } from '../user.module';


@Module({
  imports: [UserModule],
})
export class AppModule {}
