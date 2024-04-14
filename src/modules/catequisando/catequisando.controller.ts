import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { CatequisandoService } from "./catequisando.service";
import { UpdateCatequisandoDto } from "./dto/update-catequisando.dto";
import { CreateCatequisandoDto } from "./dto/create-catequisando.dto";

@Controller("catequisando")
export class CatequisandoController {
  constructor(private readonly catequisandoService: CatequisandoService) {}

  @Post()
  create(@Body() createCatequisandoDto: CreateCatequisandoDto) {
    return this.catequisandoService.create(createCatequisandoDto);
  }

  @Get()
  findAll() {
    return this.catequisandoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.catequisandoService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateCatequisandoDto: UpdateCatequisandoDto) {
    return this.catequisandoService.update(id, updateCatequisandoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.catequisandoService.remove(id);
  }
}
