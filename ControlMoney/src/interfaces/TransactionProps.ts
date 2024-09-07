export interface TransactionProps{
  id: number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAT: string,
}