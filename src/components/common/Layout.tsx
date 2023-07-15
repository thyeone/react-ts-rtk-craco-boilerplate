import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const Layout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
