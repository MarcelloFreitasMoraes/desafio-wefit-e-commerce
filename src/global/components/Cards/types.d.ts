import { ProductList } from "@/global/types/types"
export interface CardProps {
    data?: ProductList
    amount?: number | undefined
    action: () => void
}