// src/auth/auth.service.ts
import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  private readonly users: User[];

  constructor() {
    this.users = [
      // Замість цих мокових даних можна підключити реальну базу даних
      new User(
        1,
        "example@email.com",
        bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
        "Name Surname",
        "",
        false
      ),
    ];
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = this.users.find((u) => u.email === email);
    if (user && (await user.validatePassword(password))) {
      return user;
    }
    return null;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }
}
