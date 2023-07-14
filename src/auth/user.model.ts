// src/auth/user.model.ts
import * as bcrypt from 'bcrypt';

export class User {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public name: string,
    public avatar: string,
    public isEmailVerified: boolean,
  ) {}

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}
