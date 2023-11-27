import { BaseButton } from './style';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return <BaseButton>{text}</BaseButton>;
};

export default Button;
