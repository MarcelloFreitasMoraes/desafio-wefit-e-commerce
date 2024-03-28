import * as S from './Typographic.styled'
import { IcontentProps } from './types'

const TypographicComponent: React.FC<IcontentProps> = ({
    large,
    medium,
    small,
    regular,
    description,
    title,
    primary,
    weight,
}) => {
    return (
        <>
            {large && (
                <S.Large primary={primary} weight={weight}>
                    {title}
                </S.Large>
            )}
            {medium && (
                <S.Medium primary={primary} weight={weight}>
                    {title}
                </S.Medium>
            )}
            {regular && (
                <S.Regular primary={primary} weight={weight}>
                    {title}
                </S.Regular>
            )}
            {small && (
                <S.Small primary={primary} weight={weight}>
                    {title}
                </S.Small>
            )}
            {description && (
                <S.Description primary={primary} weight={weight}>
                    {title}
                </S.Description>
            )}
        </>
    )
}

export default TypographicComponent
