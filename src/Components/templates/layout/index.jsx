import * as React from 'react';
import Container from '../../atoms/Container';


export default function Layout({children}) {
  return (
    <React.Fragment>
        <Container>
            {children}
        </Container>
    </React.Fragment>
  );
}
