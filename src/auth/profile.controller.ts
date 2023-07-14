// src/auth/profile.controller.ts
import {
  Controller,
  Get,
  Patch,
  Request,
  UseGuards,
  Body,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { UpdateUserDto } from "./update-user.dto";
import { AuthGuard } from "@nestjs/passport";
import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName, imageFileFilter } from "./file-upload.utils";

@Controller("profile")
export class ProfileController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard("local"))
  getProfile(@Request() req): User {
    return req.user;
  }

  @Patch()
  @UseGuards(AuthGuard("local"))
  async updateProfile(
    @Request() req,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    const user = await this.authService.findUserByEmail(req.user.email);
    if (!user) {
      // Код для обробки, якщо користувач не знайдений
    }
    user.name = updateUserDto.name;
    // Збереження змін у базі даних або іншому місці зберігання

    return Promise.resolve(user);
  }

  @Patch("avatar")
  @UseGuards(AuthGuard("local"))
  @UseInterceptors(
    FileInterceptor("avatar", {
      storage: diskStorage({
        destination: "./avatars",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  async updateAvatar(@Request() req, @UploadedFile() file): Promise<User> {
    const user = await this.authService.findUserByEmail(req.user.email);
    if (!user) {
      // Код для обробки, якщо користувач не знайдений
    }
    // Збереження аватарки у базі даних або іншому місці зберігання
    user.avatar = file.filename;

    return Promise.resolve(user);
  }
}
