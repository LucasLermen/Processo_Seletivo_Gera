import { Fatura } from './fatura';

export interface UnidadeConsumidora {
    id?: number;
    endereco: string;
    distribuidora: string;
    nome: string;
    numero: string;
    faturas?: Fatura[];
}