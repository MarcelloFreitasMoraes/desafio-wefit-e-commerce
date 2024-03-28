export interface CardProps {
    amount?: number
    image?: string
    price?: number
    title?: string
    data?:any
    action: () => void
}