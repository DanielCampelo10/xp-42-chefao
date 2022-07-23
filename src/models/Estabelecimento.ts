import { Schema, model } from "mongoose";
import { IImages } from "./Images";
import { IEndereco } from "./Endereco";
import { IHorario } from "./Horario";

export interface IEstabelecimento {
    nome: string;
    segmento: string;
    logo: Schema.Types.ObjectId[] | IImages[];
    endereco: Schema.Types.ObjectId[] | IEndereco[];
    ativo: boolean;
    horario: Schema.Types.ObjectId[] | IHorario[];
    delivery: boolean;
    retirada: boolean;
  }

const estabelecimentoSchema = new Schema <IEstabelecimento> ({
    nome: {
        type: Schema.Types.String,
    },
    segmento: {
        type: Schema.Types.String,
    },
    logo: [
        {
          type: Schema.Types.ObjectId,
          ref: "Images",
        },
    ],
    endereco: [
        {
            type: Schema.Types.ObjectId,
            ref: "Endereco",
        },
    ],
    ativo: {
        type: Schema.Types.Boolean,
    },
    horario: [
        {
            type: Schema.Types.ObjectId,
            ref: "Horario",
        },
    ],
    delivery: {
        type: Schema.Types.Boolean,
    },
    retirada: {
        type: Schema.Types.Boolean,
    }
},
{timestamps: true}
);

export default model <IEstabelecimento>("Estabelecimento", estabelecimentoSchema);