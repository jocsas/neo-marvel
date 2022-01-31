
export function currency(currency: number){
   return `R$ ${currency.toFixed(2).replace('.', ',')}`
}