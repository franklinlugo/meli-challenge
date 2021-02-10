import * as React from 'react';
import styled from 'styled-components';

type SectionContainerProps = {
  className?: string;
  rootStyles?: React.CSSProperties;
  id?: string;
};

const Root = styled.section``;

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layoutMaxWidth};
`;

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, rootStyles, id }) => {
  return (
    <Root style={rootStyles} id={id}>
      <Inner className={className}>{children}</Inner>
    </Root>
  );
};

export default SectionContainer;
