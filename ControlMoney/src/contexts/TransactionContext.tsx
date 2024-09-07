import {  createContext, useEffect, useState } from "react";
import { TransactionContextTypeProps } from "../interfaces/TransactionContextType";
import { TransactionsProviderProps } from "../interfaces/TransactionsProviderProps";
import { TransactionProps } from "../interfaces/TransactionProps";
import { api } from "../lib/axios";

export const TransactionsContext = createContext({} as TransactionContextTypeProps)

export function TransactionsProvider({children} : TransactionsProviderProps){

  const [transactions, setTransactions] = useState<TransactionProps[]>([])


  async function fetchTransactions(query?: string){
    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    })

      setTransactions(response.data)
  }

  useEffect(()=> {
      fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      }}>
      {children}
    </TransactionsContext.Provider>
  )
}