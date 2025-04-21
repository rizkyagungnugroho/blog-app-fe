import { injectable } from "tsyringe";
import { PrismaService } from "../prisma/prisma.service";
import { RegisterDTO } from "./dto/register.dto";
import { ApiError } from "../../utils/api-error";
import { PasswordService } from "./password.service";

@injectable()
export class AuthService {
  private prisma: PrismaService;
  private passwordService: PasswordService;

  constructor(prisma: PrismaService, passwordService: PasswordService) {
    this.prisma = prisma;
    this.passwordService = passwordService;
  }

  register = async (body: RegisterDTO) => {
    const { name, email, password } = body;

    const existingUser = await this.prisma.user.findFirst({ where: { email } });

    if (existingUser) {
      throw new ApiError("Email is already registered", 400);
    }

    const hashedPassword = await this.passwordService.hashPassword(password);

    return await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  };
}
