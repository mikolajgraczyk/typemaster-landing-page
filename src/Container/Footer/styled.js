import styled from "styled-components";

export const StyledFooter = styled.footer`
  text-align: center;
  margin: 128px 0 39px 0;
  color: ${({ theme }) => theme.color.wildBlueYonder};
  line-height: 26px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin: 142px 0 43px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 98px 0 50px 0;
  }
`;
