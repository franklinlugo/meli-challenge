import * as React from 'react';
import styled from 'styled-components';
import { SectionContainer } from '@components';

const StyledSearchResults = styled(SectionContainer).attrs((props) => ({
  rootStyles: {
    backgroundColor: props.theme.palette.gallery,
  },
}))`
  padding: 0 6rem;
`;

const SearchResultsLayout: React.FC = ({ children }) => {
  return <StyledSearchResults>{children}</StyledSearchResults>;
};

export default SearchResultsLayout;
