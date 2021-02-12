import { isCompositeComponentWithType } from 'react-dom/test-utils';

import styled from 'styled-components';

export const StyledResults = styled.section`
  background-color: ${({ theme }) => theme.palette.white};
  padding: 1rem;
`;
