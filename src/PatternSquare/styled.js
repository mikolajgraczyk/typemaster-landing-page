import styled from "styled-components";

const bpTablet = ({ theme }) => theme.breakpoint.tablet;

export const SquarePatternLeft = styled.div`
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  top: 940px;

  @media (max-width: ${bpTablet}px) {
    display: none;
  }
`;

export const SquarePatternRight = styled.div`
  position: absolute;
  right: 0;
  top: 185px;
  transform: translateX(50%);

  @media (max-width: ${bpTablet}px) {
    display: none;
  }
`;
