export interface DataProps {
    amount: number
    id: number
    image: string
    price: number
    title: string
    total: number
}
export interface ProductList {
    [key: string]: Product
}
