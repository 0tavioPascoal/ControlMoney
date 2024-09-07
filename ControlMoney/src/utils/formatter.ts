export const dateFormatter = new Intl.DateTimeFormat('pt-br')

export const priceFormatter = Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})