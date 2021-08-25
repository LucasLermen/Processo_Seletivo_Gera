export interface Fatura {
    id?: number;
    nomeUC?: string; 
    unidadeConsumidoraId: number;
    data_de_vencimento: string;
    consumo: number;
    valor: number;
}