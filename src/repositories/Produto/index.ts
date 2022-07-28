import { Model, Schema } from "mongoose";
import { IImages } from "../../models/Images";
import { IProdutos } from "../../models/Produto";
import IRepository from "../IRepository";

export default class ProdutoRepository implements IRepository {
  private produtoModel: any;
  constructor(produtoModel: Model<IProdutos>) {
    this.produtoModel = produtoModel;
  }
  async create(
    payload: { 
      nome: string;
      descricao: string;
      preco: number;
      imagem: Schema.Types.ObjectId[] | IImages[];  
    }
  ){
    return this.produtoModel.create(payload);
  }
  
  async find() {
    return this.produtoModel.find();
  }
  
  async update(payload: any) {}
  async findOne(payload: any) {}
  async delete(id: any) {}
}