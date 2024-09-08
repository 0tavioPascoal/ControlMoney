export interface CreateTransactionInputProps {
  description: string,
  price: number,
  category: string,
  type: 'income' | 'outcome'
}