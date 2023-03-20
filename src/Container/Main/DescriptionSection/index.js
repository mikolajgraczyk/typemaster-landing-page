import {
  StyledDescriptionSection,
  Images,
  GlassAndKeyboard,
  PhoneAndKeyboard,
  Content,
  Title,
  Descritpion,
} from "./styled";

const DescriptionSection = () => (
  <StyledDescriptionSection>
    <Images>
      <PhoneAndKeyboard />
      <GlassAndKeyboard />
    </Images>
    <Content>
      <Title>MECHANICAL WIRELESS KEYBOARD</Title>
      <Descritpion>
        The Typemaster keyboard boasts top-notch build and practical design. It
        offers a wide variety of switches and keycaps, along with reliable
        wireless connectivity.
      </Descritpion>
    </Content>
  </StyledDescriptionSection>
);

export default DescriptionSection;
