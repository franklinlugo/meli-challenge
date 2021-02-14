import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  width: 100%;
  column-gap: 1rem;
  padding: 1rem 6rem;
  .linkLogo {
    img {
      width: 60px;
    }
  }
  .form {
    position: relative;
    overflow: hidden;
    .input {
      width: 100%;
      height: 100%;
      padding: 0 4rem 0 1rem;
      font-size: 18px;
      color: ${({ theme }) => theme.palette.dustyGray};
      background-color: ${({ theme }) => theme.palette.white};
      border-radius: 0.5rem;
    }
    .searchBtn {
      position: absolute;
      top: 50%;
      right: 1px;
      transform: translateY(-50%);

      display: flex;
      justify-content: center;
      align-items: center;

      width: 3rem;
      height: 100%;
      height: calc(100% - 2px);
      background-color: ${({ theme }) => theme.palette.gallery};
      border: none;
      outline: none;
      cursor: pointer;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      img {
        width: 1.2rem;
      }
    }
  }
`;
