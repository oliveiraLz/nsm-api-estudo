import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UpdateCatequisandoDto } from "./dto/update-catequisando.dto";
import { CatequisandoRepository } from "./catequisando.repository";
import { ListCatequisandoDTO } from "./dto/list-catequisando.dto";
import { ReturnCatequisandoDto } from "./dto/return-catequisando.dto";
import { CreateCatequisandoDto } from "./dto/create-catequisando.dto";

@Injectable()
export class CatequisandoService {
  constructor(private repository: CatequisandoRepository) {}

  async create(data: CreateCatequisandoDto) {
    const catequisandoNameExists = await this.repository.findByName(data.nome);
    if (catequisandoNameExists) {
      throw new ConflictException(`O catequisando com nome ${data.nome} já está matriculado`);
    }

    const catequisandoCpfExists = await this.repository.findByCpf(data.cpf);
    if (catequisandoCpfExists) {
      throw new ConflictException(`O catequisando com o cpf ${data.cpf} já está matriculado`);
    }

    if (!data.nome || !data.cpf) {
      throw new BadRequestException("O nome e o CPF do catequisando devem ser informados");
    }

    const newCatequisando = await this.repository.create(data);
    return await this.repository.save(newCatequisando);
  }

  async findAll() {
    const lista = await this.repository.findAll();
    if (!lista) {
      throw new NotFoundException("Catequisandos não encontrados");
    }
    return lista.map((catequisando) => new ListCatequisandoDTO(catequisando));
  }

  async findOne(id: string) {
    const catequisando = await this.repository.findOne(id);
    if (!catequisando) {
      throw new NotFoundException("Catequisando não encontrado");
    }
    return new ReturnCatequisandoDto(catequisando);
  }

  async update(id: string, data: UpdateCatequisandoDto) {
    const catequisando = await this.repository.findOne(id);
    if (!catequisando) {
      throw new NotFoundException("Catequisando não encontrado");
    }
    await this.repository.updateCatequisando(catequisando, data);
    return await this.repository.save(catequisando);
  }

  async remove(id: string) {
    const catequisando = await this.repository.findOne(id);
    if (!catequisando) {
      throw new NotFoundException("Catequisando não encontrado");
    }
    return await this.repository.remove(catequisando);
  }
}
