export interface InvestmentState {
    fixedDeposits: IFixedDepositState[]
}

export interface IFixedDepositState {
    number: string;
    jointHolder: string;
    principal: number;
    maturityAmount: number;
    openedOn: Date;
    maturityOn: Date;
    interest: number;
    status: string;
}
