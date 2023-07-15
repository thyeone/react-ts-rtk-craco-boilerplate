import { styled } from 'styled-components';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return <Container>{text}</Container>;
};

export default Button;

const Container = styled.button`
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
