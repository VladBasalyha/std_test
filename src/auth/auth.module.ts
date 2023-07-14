// src/auth/auth.module.ts
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { ProfileController } from "./profile.controller";

@Module({
  imports: [PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController, ProfileController],
})
export class AuthModule {}
