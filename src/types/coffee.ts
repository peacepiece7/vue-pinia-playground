export interface Coffee {
  name: string
  price: number
  recipe: {
    name: string
    quantity: number
  }[]
}
