import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Catequisando } from "./entities/catequisando.entity";
import { UpdateCatequisandoDto } from "./dto/update-catequisando.dto";
import { CreateCatequisandoDto } from "./dto/create-catequisando.dto";

@Injectable()
export class CatequisandoRepository {
  constructor(
    @Inject("CATEQUISANDO_REPOSITORY")
    private repository: Repository<Catequisando>
  ) {}

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async findAll() {
    return await this.repository.find();
  }

  async findByName(name: string) {
    return await this.repository.findOne({
      where: { nome: name },
    });
  }

  async findByCpf(cpf: string) {
    return await this.repository.findOne({
      where: { cpf: cpf },
    });
  }

  async create(data: CreateCatequisandoDto) {
    return this.repository.create(data);
  }

  async updateCatequisando(catequisando: Catequisando, data: UpdateCatequisandoDto) {
    return this.repository.merge(catequisando, data);
  }

  async save(catequisando: Catequisando) {
    return await this.repository.save(catequisando);
  }

  async remove(catequisando: Catequisando) {
    return await this.repository.remove(catequisando);
  }
}
