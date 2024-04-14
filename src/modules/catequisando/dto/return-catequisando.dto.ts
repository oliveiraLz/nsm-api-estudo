import { Catequisando } from "../entities/catequisando.entity";

export class ReturnCatequisandoDto {
  id: string;
  nome: string;
  idade: number;
  turmaId: string;
  cpf: string;
  cpfResponsavel: string;
  nomePai: string;
  nomeMae: string;
  celPai: string;
  celMae: string;
  batizado: boolean;
  endereco: string;
  certNascimento: string;
  certBatismo: string;
  foto: string;
  compResid: string;
  docResp: string;
  termoResp: string;

  constructor(catequisando: Catequisando) {
    this.id = catequisando.id;
    this.nome = catequisando.nome;
    this.idade = catequisando.idade;
    this.turmaId = catequisando.turma.id;
    this.cpf = catequisando.cpf;
    this.cpfResponsavel = catequisando.cpf_responsavel;
    this.nomePai = catequisando.nome_pai;
    this.nomeMae = catequisando.nome_mae;
    this.celPai = catequisando.cel_pai;
    this.celMae = catequisando.cel_mae;
    this.batizado = catequisando.batizado;
    this.endereco = catequisando.endereco;
    this.certNascimento = catequisando.cert_nascimento;
    this.certBatismo = catequisando.cert_batismo;
    this.foto = catequisando.foto;
    this.compResid = catequisando.comp_resid;
    this.docResp = catequisando.doc_resp;
    this.termoResp = catequisando.termo_resp;
  }
}
