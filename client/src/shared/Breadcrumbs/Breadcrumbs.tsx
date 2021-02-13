import * as React from 'react';
import { StyledBreadcrumbs } from './BreadcrumbsStyles';

type BreadcrumbsProps = {
  categories: string[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ categories = [] }) => {
  return <StyledBreadcrumbs>{categories.join(' > ')}</StyledBreadcrumbs>;
};

export default Breadcrumbs;
