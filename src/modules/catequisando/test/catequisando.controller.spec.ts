import { Test, TestingModule } from "@nestjs/testing";
import { CatequisandoController } from "../catequisando.controller";
import { CatequisandoService } from "../catequisando.service";

describe("CatequisandoController", () => {
  let controller: CatequisandoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatequisandoController],
      providers: [CatequisandoService],
    }).compile();

    controller = module.get<CatequisandoController>(CatequisandoController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
