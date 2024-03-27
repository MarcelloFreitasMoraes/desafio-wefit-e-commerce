import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 16px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
`
export const Title = styled.h3`
color: ${(props) => props.theme.colors.white};
font-size: ${(props) => props.theme.fonts.fontSize.medium};
`