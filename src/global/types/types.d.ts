export interface DataProps {
    amount: number
    id: number
    image: string
    price: number
    title: string
}

export interface Item {
    amount: number
    id: number
    image: string
    price: number
    title: string
}

export interface Data {
    [key: string]: Item
}

export type DataPo = Data
