import { TransactionProps } from "./TransactionProps";

export interface TransactionContextTypeProps{
  transactions : TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
}