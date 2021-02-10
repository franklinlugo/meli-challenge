import styled from 'styled-components';
import { SectionContainer } from '@components';

export const StyledSearchResults = styled(SectionContainer).attrs((props) => ({
  rootStyles: {
    backgroundColor: props.theme.palette.gallery,
  },
}))`
  padding: 0 6rem;
`;
