import styled from 'styled-components';

export const StyledProductDetail = styled.div`
  padding: 0 6rem;
  .productCard {
    background-color: ${({ theme }) => theme.palette.white};
    padding: 2rem;
    > .productImage {
      display: flex;
      gap: 2rem;
      > .image {
        flex: 2;
        display: flex;
        justify-content: center;
        img {
          max-width: 100%;
        }
      }
      > .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        > .status {
          font-size: 0.875rem;
          line-height: 1;
          margin-bottom: 1rem;
        }
        > .title {
          font-size: 1.5rem;
          line-height: 1;
          margin-bottom: 2rem;
        }
        > .price {
          font-size: 2.875rem;
          line-height: 1;
          margin-bottom: 2rem;
        }
        > .buyBtn {
          padding: 1rem 0;
          font-size: 1rem;
          line-height: 1;
          border-radius: 8px;
          cursor: pointer;
          color: ${({ theme }) => theme.palette.white};
          background-color: ${({ theme }) => theme.palette.dodgerBlue};
        }
      }
    }
    > .productDescription {
      width: 66%;
      margin-top: 6rem;
      > .title {
        font-size: 1.75rem;
        line-height: 1;
        margin-bottom: 2rem;
      }
      > .paragraph {
        font-size: 1rem;
        line-height: 1.2;
        color: ${({ theme }) => theme.palette.dustyGray};
      }
    }
  }
`;
