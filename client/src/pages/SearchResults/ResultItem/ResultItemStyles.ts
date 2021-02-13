import styled from 'styled-components';

export const StyledResultItem = styled.article`
  display: grid;
  grid-template-columns: 180px 1fr;

  border-bottom: thin solid ${({ theme }) => theme.palette.gallery};
  padding-bottom: 1rem;
  &:not(:first-child) {
    padding-top: 1rem;
  }
  .image {
    border-radius: 4px;
    cursor: pointer;
  }
  .productInfo {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-content: start;
    margin: 0 0 0 1rem;
    .price {
      padding-top: 1rem;
      font-size: 1.5rem;
      line-height: 1;
    }
    .title {
      padding-top: 2rem;
      font-size: 1.125rem;
      line-height: 1;
    }
    .location {
      padding-top: 1rem;
      font-size: 0.75rem;
      align-self: end;
      line-height: 1;
    }
  }
`;
