import {  createContext, useEffect, useState } from "react";
import { TransactionContextTypeProps } from "../interfaces/TransactionContextType";
import { TransactionsProviderProps } from "../interfaces/TransactionsProviderProps";
import { TransactionProps } from "../interfaces/TransactionProps";
import { api } from "../lib/axios";
import { CreateTransactionInputProps } from "../interfaces/CreateTransactionInput";

export const TransactionsContext = createContext({} as TransactionContextTypeProps)

export function TransactionsProvider({children} : TransactionsProviderProps){

  const [transactions, setTransactions] = useState<TransactionProps[]>([])


  async function fetchTransactions(query?: string){
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'dec',
        q: query
      }
    })

      setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInputProps){
    const {description, price ,category ,type} = data

    const response =  await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [response.data, ...state ])
  }

  useEffect(()=> {
      fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction,
      }}>
      {children}
    </TransactionsContext.Provider>
  )
}