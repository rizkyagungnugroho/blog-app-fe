import { Context, createMockContext, MockContext } from "../../../test/context";
import { SampleService } from "./sample.service";

describe("SampleService", () => {
  let mockCtx: MockContext;
  let ctx: Context;
  let sampleService: SampleService;

  beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
    sampleService = new SampleService(ctx.prisma);
  });

  describe("getSamples", () => {
    it("should return samples", async () => {
      const mockSamples = [
        { id: 1, name: "mock1", createdAt: new Date(), updatedAt: new Date() },
        { id: 2, name: "mock2", createdAt: new Date(), updatedAt: new Date() },
        { id: 3, name: "mock3", createdAt: new Date(), updatedAt: new Date() },
      ];

      mockCtx.prisma.sample.findMany.mockResolvedValue(mockSamples);
      const result = await sampleService.getSamples();
      expect(result).toEqual(mockSamples);
    });
  });

  describe("getSample", () => {
    it("should return sample with the correct id", async () => {
      const mockSample = {
        id: 1,
        name: "mock1",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockCtx.prisma.sample.findFirst.mockResolvedValueOnce(mockSample);
      const result = await sampleService.getsample(mockSample.id);
      expect(result).toBe(mockSample);
    });

    it("should throw an error if sample with the given id does not exist", async () => {
      const mockSampleId = -1;
      mockCtx.prisma.sample.findFirst.mockResolvedValue(null);

      await expect(sampleService.getsample(mockSampleId)).rejects.toThrow("sample not found");
    });
  });

  describe("createSample", () => {
    it("should create sample successfully", async () => {
      const mockSample = {
        id: 1,
        name: "mock1",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockCtx.prisma.sample.create.mockResolvedValueOnce(mockSample);

      const result = await sampleService.createSample({ name: "mock1" });

      expect(result).toEqual(mockSample);
      expect(mockCtx.prisma.sample.create).toHaveBeenCalledWith({
        data: { name: "mock1" },
      });
    });
  });
});
