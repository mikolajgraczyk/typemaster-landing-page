import styled from "styled-components";

import GlassAndKeyboardDesktop from "./images/image-glass-and-keyboard-desktop.jpg";
import GlassAndKeyboardTablet from "./images/image-glass-and-keyboard-tablet.jpg";
import GlassAndKeyboardMobile from "./images/image-glass-and-keyboard-mobile.jpg";

import PhoneAndKeyboardDesktop from "./images/image-phone-and-keyboard-desktop.jpg";
import PhoneAndKeyboardTablet from "./images/image-phone-and-keyboard-tablet.jpg";
import PhoneAndKeyboardMobile from "./images/image-phone-and-keyboard-mobile.jpg";

const bpTablet = ({ theme }) => theme.breakpoint.tablet;
const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledDescriptionSection = styled.section`
  width: 100%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto 255px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  @media (max-width: ${bpTablet}px) {
    margin-top: 40px;
    gap: 72px;
    grid-template-columns: auto;
    justify-content: center;
  }

  @media (max-width: ${bpMobile}px) {
    margin-top: 24px;
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: ${bpTablet}px) {
    justify-content: space-between;
  }

  @media (max-width: ${bpMobile}px) {
    margin-right: 40px;
  }
`;

export const PhoneAndKeyboard = styled.div`
  width: 255px;
  height: 480px;
  background-color: ${({ theme }) => theme.color.tango};
  background-image: url(${PhoneAndKeyboardDesktop});
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  @media (max-width: ${bpTablet}px) {
    width: 214px;
    height: 320px;
    background-image: url(${PhoneAndKeyboardTablet});
    background-size: cover;
  }

  @media (max-width: ${bpMobile}px) {
    width: 129px;
    height: 193px;
    background-image: url(${PhoneAndKeyboardMobile});
    background-size: cover;
  }
`;

export const GlassAndKeyboard = styled.div`
  width: 445px;
  height: 480px;
  background-image: url(${GlassAndKeyboardDesktop});
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  @media (max-width: ${bpTablet}px) {
    width: 445px;
    height: 320px;
    background-image: url(${GlassAndKeyboardTablet});
    background-blend-mode: multiply;
    background-size: cover;
  }

  @media (max-width: ${bpMobile}px) {
    width: 220px;
    height: 193px;
    background-image: url(${GlassAndKeyboardMobile});
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${bpTablet}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: ${bpMobile}px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.bigStone};
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;

  @media (max-width: ${bpTablet}px) {
    flex-basis: 255px;
  }

  @media (max-width: ${bpMobile}px) {
    flex-basis: auto;
    width: 255px;
    text-align: center;
  }
`;

export const Descritpion = styled.span`
  color: ${({ theme }) => theme.color.wildBlueYonder};
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  @media (max-width: ${bpTablet}px) {
    flex-basis: 398px;
  }

  @media (max-width: ${bpMobile}px) {
    flex-basis: auto;
    text-align: center;
    width: 327px;
  }
`;
