import styled, { css } from 'styled-components'
import { IPrimaryColorProps } from './types'

const baseStyles = css<IPrimaryColorProps>`
    color: ${(props) =>
        props.primary ? props.theme.colors.text : props.theme.colors.white};
    font-weight: ${(props) => {
        switch (props.weight) {
            case 'light':
                return 400
            case 'normal':
                return 500
            case 'semi-bold':
                return 600
            case 'bold':
                return 700
            default:
                return 400
        }
    }};
`

const Text = styled.p<IPrimaryColorProps>`
    ${baseStyles}
`

export const Large = styled(Text)`
    font-size: ${(props) => props.theme.fonts.fontSize.large};
`

export const Medium = styled(Text)`
    font-size: ${(props) => props.theme.fonts.fontSize.medium};
`

export const Regular = styled(Text)<IPrimaryColorProps>`
    font-size: ${(props) => props.theme.fonts.fontSize.regular};
`

export const Small = styled(Text)`
    font-size: ${(props) => props.theme.fonts.fontSize.small};
    color: ${(props) =>
        props.primary
            ? props.theme.colors.description
            : props.theme.colors.white};
`

export const Description = styled(Text)`
    font-size: ${(props) => props.theme.fonts.fontSize.small};
`
