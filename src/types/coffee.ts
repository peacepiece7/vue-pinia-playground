export interface Coffee {
  name: string
  price: number
  discounted?: boolean
  recipe: {
    name: string
    quantity: number
  }[]
}
