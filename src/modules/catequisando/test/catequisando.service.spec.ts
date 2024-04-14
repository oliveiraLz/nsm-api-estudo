import { Test, TestingModule } from "@nestjs/testing";
import { CatequisandoService } from "../catequisando.service";

describe("CatequisandoService", () => {
  let service: CatequisandoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatequisandoService],
    }).compile();

    service = module.get<CatequisandoService>(CatequisandoService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
