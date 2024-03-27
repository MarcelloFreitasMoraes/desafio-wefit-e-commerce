import styled from 'styled-components'

export const Container = styled.div`
  width: 338.67px;
  height: 324px;
  border-radius: 4px;
  padding: 16px;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.white};
`
export const Box = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const ContentButton = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const Button = styled.button`
background-color: ${(props) => props.theme.colors.primary};
color: ${(props) => props.theme.colors.white};
width: 306.67px;
height: 40px;
padding: 8px;
gap: 12px;
border-radius: 4px;
border: none;
`