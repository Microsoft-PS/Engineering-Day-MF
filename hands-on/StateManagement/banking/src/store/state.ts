export interface IBankingState {
    accounts: IAccountState[]
}

export interface IAccountState {
    number: string;
    holderName: string;
    secondaryHolder: string;
    balance: number
}