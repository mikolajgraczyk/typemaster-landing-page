import { StyledTile, IconBox, TitleWrapper, DescriptionWrapper } from "./styled";

const FeatureTile = ({ icon, title, description }) => (
  <StyledTile>
    <IconBox>{icon}</IconBox>
    <TitleWrapper>{title}</TitleWrapper>
    <DescriptionWrapper>{description}</DescriptionWrapper>
  </StyledTile>
);

export default FeatureTile;
