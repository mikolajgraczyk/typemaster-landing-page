import styled from "styled-components";

export const StyledIntroduceSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 50px;
`;

export const Content = styled.div`
  max-width: 445px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 56px;
  line-height: 56px;
  color: ${({ theme }) => theme.color.bigStone};
`;

export const Descritpion = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.color.wildBlueYonder};
`;

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  align-items: center;
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
`;

export const Release = styled.span`
  color: ${({ theme }) => theme.color.wildBlueYonder};
  font-weight: 700;
  white-space: nowrap;
`;

export const ImageWrapper = styled.div`
  max-width: 540px;
  max-height: 480px;
  align-self: center;
`;

export const KeyboardImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;
