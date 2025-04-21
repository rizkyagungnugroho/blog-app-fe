import App from "../../../src/app"; // ✅
import { PrismaService } from "../../../src/modules/prisma/prisma.service";
import request from "supertest";

describe("GET /samples", () => {
  const { app } = new App();
  const prisma = new PrismaService();

  it("should provide sample with the requested id", async () => {
    const mockSampleData = [{ name: "test1" }];
    await prisma.sample.createMany({
      data: mockSampleData,
    });

    const response = await request(app).get("/samples/1");

    expect(response.status).toBe(200);
    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.name).toBeDefined();
  });

  it("should return 404 not found if the sample with the given id does not exist", async () => {
    const notExistentSampleId = 999999999;

    const response = await request(app).get(`/samples/${notExistentSampleId}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("sample not found");
  });
});