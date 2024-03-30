export interface ButtonProps {
    onClick:() => void
    label: string
    width?: string
    disabled?: boolean
    loading?: boolean
}