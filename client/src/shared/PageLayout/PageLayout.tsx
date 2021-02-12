import * as React from 'react';
import { StyledPageLayout, SearchBarContainer, ChildrenContainer } from './PageLayoutStyles';

type PageLayoutProps = {
  searchBar: React.ReactElement;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children, searchBar }) => {
  return (
    <StyledPageLayout>
      <SearchBarContainer>{searchBar}</SearchBarContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </StyledPageLayout>
  );
};

export default PageLayout;
