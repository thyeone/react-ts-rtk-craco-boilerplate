import styled from 'styled-components';

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  border-radius: 100px;
  background-color: #06b6d4;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;
