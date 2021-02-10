import * as React from 'react';
import styled from 'styled-components';

type SectionContainerProps = {
  className?: string;
  rootClassName?: string;
  id?: string;
};

const Root = styled.section``;

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layoutMaxWidth};
`;

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, rootClassName, id }) => {
  return (
    <Root className={rootClassName} id={id}>
      <Inner className={className}>{children}</Inner>
    </Root>
  );
};

export default SectionContainer;
