import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1190px;
  margin: 55px auto;
  overflow: hidden;
  padding: 0 40px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0 24px;
  }
`;
