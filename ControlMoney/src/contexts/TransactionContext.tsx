import {  createContext, useEffect, useState } from "react";
import { TransactionContextTypeProps } from "../interfaces/TransactionContextType";
import { TransactionsProviderProps } from "../interfaces/TransactionsProviderProps";
import { TransactionProps } from "../interfaces/TransactionProps";

export const TransactionsContext = createContext({} as TransactionContextTypeProps)

export function TransactionsProvider({children} : TransactionsProviderProps){

  const [transactions, setTransactions] = useState<TransactionProps[]>([])


  async function fetchTransactions(query?: string){
    const url = new URL('http://localhost:3333/transactions')
    if(query){
      url.searchParams.append('q', query)
    }
    const res = await fetch(url)
    const data = await res.json()
      setTransactions(data)
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