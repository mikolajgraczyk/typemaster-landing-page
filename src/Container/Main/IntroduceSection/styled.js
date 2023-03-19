import styled from "styled-components";
import KeyboardImageDesktop from "./Images/image-keyboard-desktop.jpg";
import KeyboardImageTablet from "./Images/image-keyboard-tablet.jpg";
import KeyboardImageMobile from "./Images/image-keyboard-mobile.jpg";

const bpTablet = ({ theme }) => theme.breakpoint.tablet;
const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledIntroduceSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 69px;

  @media (max-width: ${bpMobile}px) {
    flex-direction: column;
    gap: 64px;
  }
`;

export const Content = styled.div`
  max-width: 445px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 56px;
  line-height: 56px;
  margin: 0;
  color: ${({ theme }) => theme.color.bigStone};

  @media (max-width: ${bpTablet}px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const Descritpion = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin-top: 24px;
  color: ${({ theme }) => theme.color.wildBlueYonder};

  @media (max-width: ${bpTablet}px) {
    font-size: 16px;
    line-height: 26px;
    margin-top: 34px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: ${bpTablet}px) {
    gap: 37px;
  }

  @media (max-width: ${bpMobile}px) {
    gap: 32px;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  padding: 16px 27px;
  background: ${({ theme }) => theme.color.tango};
  border: none;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.atomicTangerine};
  }

  @media (max-width: ${bpMobile}px) {
    padding: 11px 14px;
  }
`;

export const Release = styled.span`
  color: ${({ theme }) => theme.color.wildBlueYonder};
  font-weight: 700;
  white-space: nowrap;
`;

export const Image = styled.div`
  min-width: 540px;
  min-height: 480px;
  border-radius: 20px;
  background-image: url(${KeyboardImageDesktop});
  background-color: red;
  background-size: cover;
  background-position: center;

  @media (max-width: ${bpTablet}px) {
    min-width: 478px;
    min-height: 425px;
    background-image: url(${KeyboardImageTablet});
  }

  @media (max-width: ${bpMobile}px) {
    margin-left: calc(15%);
    min-width: 372px;
    min-height: 331px;
    background-image: url(${KeyboardImageMobile});
  }
`;
