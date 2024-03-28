import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
      &::placeholder {
        color: ${(props) => props.theme.colors.disabled}; 
      }   
`;

export const SearchIcon = styled.span`
  cursor: pointer;
  margin-left: 8px;
`;
