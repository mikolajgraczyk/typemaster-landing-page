import {
  StyledIntroduceSection,
  Content,
  Title,
  Descritpion,
  Wrapper,
  Button,
  Release,
  ImageWrapper,
  KeyboardImage,
} from "./styled";
import KeyboardImageDesktop from "./Images/image-keyboard-desktop.jpg";

const IntroduceSection = () => (
  <StyledIntroduceSection>
    <Content>
      <Title>TYPEMASTER KEYBOARD</Title>
      <Descritpion>
        Improve your productivity and gaming without breaking the bank. Upgrade
        to a high quality mechanical typing experience.
      </Descritpion>
      <Wrapper>
        <Button>PRE-ORDER NOW</Button>
        <Release>Release on 5/27</Release>
      </Wrapper>
    </Content>
    <ImageWrapper>
      <KeyboardImage src={KeyboardImageDesktop} />
    </ImageWrapper>
  </StyledIntroduceSection>
);

export default IntroduceSection;
