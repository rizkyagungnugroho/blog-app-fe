import argon2 from "argon2";
import { injectable } from "tsyringe";

@injectable()
export class PasswordService {
  async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password);
  }
}
