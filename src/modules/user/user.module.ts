import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthTokenModule } from "../auth/auth-token.module";
import { UserController } from "./controller/user.controller";
import { UserEntity } from "./entities/user.entity";
import { UserService } from "./service/user.service";


@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
    ]),
    AuthTokenModule,
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
  ],
  exports: [
    UserService,
  ],
})
export class UserModule {}