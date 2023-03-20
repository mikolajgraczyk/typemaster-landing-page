import { SquarePatternLeft, SquarePatternRight } from "./styled";
import { ReactComponent as SquarePattern } from "./Images/SquarePattern.svg";

const PatternSquare = () => (
  <>
    <SquarePatternRight>
      <SquarePattern />
    </SquarePatternRight>
    <SquarePatternLeft>
      <SquarePattern />
    </SquarePatternLeft>
  </>
);

export default PatternSquare;
