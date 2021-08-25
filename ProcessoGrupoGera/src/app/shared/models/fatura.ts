export interface Fatura {
    id?: any;
    nomeUC?: string; 
    unidadeConsumidoraId: number;
    data_de_vencimento: string;
    consumo: number;
    valor: number;
}