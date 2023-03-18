import styled from "styled-components";
import { ReactComponent as Logo } from "./images/Logo.svg";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled(Logo)``;

export const HeaderButton = styled.button`
  font-family: "Barlow", sans-serif;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.mystic};
  color: ${({ theme }) => theme.color.bigStone};
  border: none;
  font-weight: 700;
  padding: 16px 27px;
`;
