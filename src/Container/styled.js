import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1190px;
  margin: 55px auto 0 auto;
  overflow: hidden;
  padding: 0 40px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 40px auto 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0 24px;
    margin: 23px auto 0 auto;
  }
`;
