import * as React from 'react';
import { StyledBreadcrumbs } from './BreadcrumbsStyles';

const Breadcrumbs: React.FC = () => {
  return (
    <StyledBreadcrumbs>
      foo {'>'} bar {'>'} foobar {'>'} foo
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
