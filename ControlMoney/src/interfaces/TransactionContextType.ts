import { CreateTransactionInputProps } from "./CreateTransactionInput";
import { TransactionProps } from "./TransactionProps";

export interface TransactionContextTypeProps{
  transactions : TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputProps) => Promise<void>
}