import {  createContext, useEffect, useState } from "react";
import { TransactionContextTypeProps } from "../interfaces/TransactionContextType";
import { TransactionsProviderProps } from "../interfaces/TransactionsProviderProps";
import { TransactionProps } from "../interfaces/TransactionProps";

export const TransactionsContext = createContext({} as TransactionContextTypeProps)

export function TransactionsProvider({children} : TransactionsProviderProps){

  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(()=> {
      async function loadTransactions(){
        const res = await fetch('http://localhost:3333/transactions')
        const data = await res.json()
          setTransactions(data)
      }

      loadTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}