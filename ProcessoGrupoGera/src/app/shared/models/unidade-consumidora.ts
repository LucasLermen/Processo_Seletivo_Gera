import { Fatura } from './fatura';

export interface UnidadeConsumidora {
    id?: any;
    endereco: string;
    distribuidora: string;
    nome: string;
    numero: string;
    faturas?: Fatura[];
}