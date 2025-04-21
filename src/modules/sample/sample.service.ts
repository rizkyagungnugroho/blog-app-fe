import { Sample } from "../../generated/prisma";
import { PrismaService } from "../prisma/prisma.service";
import { ApiError } from "../../utils/api-error";
import { injectable } from "tsyringe";
import { CreateSampleDTO } from "./dto/create-sample.dto";


@injectable()
export class SampleService {
  private prisma: PrismaService;

  constructor(PrismaClient: PrismaService) {
    this.prisma = PrismaClient;
  }

  getSamples = async () => {
    const samples = await this.prisma.sample.findMany();
    return samples;
  };

  getsample = async (id: number) => {
    const sample = await this.prisma.sample.findFirst({
      where: { id },
    });

    if (!sample) {
      throw new ApiError("sample not found", 404);
    }

    return sample;
  };

  createSample = async (body: CreateSampleDTO) => {
    return await this.prisma.sample.create({
      data: body,
    });
  };

  updateSample = async (id: number, body: Partial<Sample>) => {
    const sample = await this.prisma.sample.findFirst({
      where: { id },
    });

    if (!sample) {
      throw new ApiError("sample not found", 404);
    }

    return await this.prisma.sample.update({
      where: { id },
      data: body,
    });
  };

  deleteSample = async (id: number) => {
    const sample = await this.prisma.sample.findFirst({
      where: { id },
    });

    if (!sample) {
      throw new ApiError("sample not found", 404);
    }

    await this.prisma.sample.delete({
      where: { id },
    });

    return { message: "delete success" };
  };
}