export interface IcontentProps {
    large?: boolean
    medium?: boolean
    small?: boolean
    regular?: boolean
    description?: boolean
    title: string
    primary?: string
    weight?: 'light' | 'normal' | 'semi-bold' | 'bold'
}

export interface IPrimaryColorProps {
    primary?: string
    weight?: 'light' | 'normal' | 'semi-bold' | 'bold'
}
