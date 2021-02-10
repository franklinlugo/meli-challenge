import styled from 'styled-components';
import { SectionContainer } from '@components';

export const StyledSearchBar = styled(SectionContainer).attrs((props) => ({
  rootStyles: {
    backgroundColor: props.theme.palette.turbo,
  },
}))`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 1rem;
  padding: 1rem 6rem;
  .logo {
    width: 60px;
  }
  .inputContainer {
    position: relative;
    .input {
      width: 100%;
      height: 100%;
      padding: 0 5rem 0 1rem;
      font-size: 18px;
      color: ${({ theme }) => theme.palette.dustyGray};
      background-color: ${({ theme }) => theme.palette.white};
      border-radius: 0.5rem;
    }
    .searchBtn {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 4rem;
      height: 100%;
      background-color: ${({ theme }) => theme.palette.gallery};
      border: none;
      outline: none;
      cursor: pointer;

      img {
        width: 2rem;
      }
    }
  }
`;
