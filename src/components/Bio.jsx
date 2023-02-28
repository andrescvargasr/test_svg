import Liquid from "./Liquid";
import Bessel from "./Bessel";
import MotorRod from "./MotorRod";
import WaterIn from "./WaterIn";
import PumpIn from "./PumpIn";
import PipelineElbowIn from "./PipelineElbowIn";
import PipelineElbowOut from "./PipelineElbowOut";
import WaterOut from "./WaterOut";
import PumpOut from "./PumpOut";
import MeasureLine from "./MeasureLine";
import SpatulaLeft from "./SpatulaLeft";
import SpatulaRight from "./SpatulaRight";

const envelope = [<Liquid />, <MotorRod />];

export const Bio = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bioreactor"
      viewBox="0 0 512 512"
    >
      {envelope[0]}
      <g id="svg2">
        <g id="layer1" transform="translate(-113.75,-92.8125)">
          <Bessel />
          <g>
            <MotorRod />
          </g>
          <WaterIn />
          <PumpIn />
          <PipelineElbowIn />
          <PipelineElbowOut />
          <WaterOut />
          <PumpOut />
        </g>
        <SpatulaLeft move={true} />
        <SpatulaRight move={true} />
      </g>
      <MeasureLine />
    </svg>
  );
};
