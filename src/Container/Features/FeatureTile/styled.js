import styled from "styled-components";

const bpTablet = ({ theme }) => theme.breakpoint.tablet;
const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 255px;

  @media (max-width: ${bpTablet}px) {

  }

  @media (max-width: ${bpMobile}px) {
    align-items: center;
    text-align: center;
    max-width: none;
  }
`;

export const IconBox = styled.div`
  background: ${({ theme }) => theme.color.tango};
  width: 65px;
  height: 65px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.bigStone};
  margin-top: 48px;
  max-width: 200px;

  @media (max-width: ${bpTablet}px) {
    margin-top: 40px;
  }

  @media (max-width: ${bpMobile}px) {
    margin-top: 48px;
    max-width: none;
  }
`;

export const DescriptionWrapper = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.color.wildBlueYonder};
  margin-top: 24px;
`;
