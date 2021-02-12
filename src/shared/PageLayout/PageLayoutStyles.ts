import styled from 'styled-components';
import { SectionContainer } from 'shared';

export const StyledPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SearchBarContainer = styled(SectionContainer).attrs((props) => ({
  rootStyles: {
    backgroundColor: props.theme.palette.turbo,
  },
}))``;

export const ChildrenContainer = styled(SectionContainer).attrs((props) => ({
  rootStyles: {
    backgroundColor: props.theme.palette.gallery,
    flex: 1,
  },
}))``;
