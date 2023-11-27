import { PropsWithChildren } from 'react';
import { Container } from './style';

const Layout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Layout;
