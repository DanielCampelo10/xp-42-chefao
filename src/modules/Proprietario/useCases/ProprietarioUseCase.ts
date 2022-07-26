import { Response, Request } from "express";
import bcrypty from "bcryptjs";
import IRepository from "../../../repositories/IRepository";
import { criptografia } from "../../../infra/adapters/criptografia";

type PayloadCadastroProprietario = {
  nome: string,
  email: string,
  senha: string,
};

export default class ProprietarioUseCase {
  private repository: IRepository;
  constructor(proprietarioRepository: IRepository) {
    this.repository = proprietarioRepository;
  }
  cadastroProprietario(payload: PayloadCadastroProprietario){

    const novaSenha = criptografia.hashSync(payload.senha);
    const novoProprietario = this.repository.create({...payload, senha: novaSenha});
    return novoProprietario;
  }

  listarProprietarios() {
    return this.repository.find();
  }

  listarProprietarioId(payload: any) {
    return this.repository.findOne(payload._id);
  }
}