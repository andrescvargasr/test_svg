import Liquid from "./Liquid";
import MotorRod from "./MotorRod";
import Bessel from "./Bessel";
import MeasureLine from "./MeasureLine";
import SpatulaLeft from "./SpatulaLeft";

const envelope = [<Liquid />, <MotorRod />];

export const Bio = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bioreactor"
      viewBox="0 0 512 512"
    >
      {envelope}
      <Bessel />
      <g id="svg2">
        <g id="layer1" transform="translate(-113.75,-92.8125)">
          {/* <SpatulaLeft /> */}
        </g>
      </g>
      <MeasureLine />
    </svg>
  );
};
