import { ProductList } from "@/global/types/types"

export interface BaseLayoutProps {
    children: React.ReactNode
    offInput?: boolean
    checkoutQuery: ProductList
}
