import Circle from "./Circle/Circle";
import GridLines from "./GridLines/GridLines";
import SquigglyLineBottom from "./SquigglyLineBottom/SquigglyLineBottom";
import SquigglyLineTop from "./SquigglyLineTop/SquigglyLineTop";

function Background() {
  return (
    <>
      <GridLines />
      <SquigglyLineBottom />
      <SquigglyLineTop />
      <Circle />
    </>
  );
}

export default Background;
