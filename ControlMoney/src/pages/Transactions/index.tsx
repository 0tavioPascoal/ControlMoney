import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionProps } from "../../interfaces/TransactionProps";

export function Transactions() {
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
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return(
                <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                  {transaction.price}
                  </PriceHighlight>
                 </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAT}</td>
              </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
