import { StyledFeatures } from "./styled";
import FeatureTile from "./FeatureTile";

import { ReactComponent as CompatibleIcon } from "./Images/CompatibleIcon.svg";
import { ReactComponent as BluetoothIcon } from "./Images/BluetoothIcon.svg";
import { ReactComponent as BatteryIcon } from "./Images/BatteryIcon.svg";
import { ReactComponent as LightIcon } from "./Images/LightIcon.svg";

const Features = () => (
  <StyledFeatures>
    <FeatureTile
      icon={<CompatibleIcon />}
      title="HIGHLY COMPATIBLE"
      description="Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
    />
    <FeatureTile
      icon={<BluetoothIcon />}
      title="WIRELESS
        WITH BLUETOOTH"
      description="Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
    />
    <FeatureTile
      icon={<BatteryIcon />}
      title="HIGH CAPACITY
        BATTERY"
      description="Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
    />
    <FeatureTile
      icon={<LightIcon />}
      title="RGB BACKLIT 
        MODES"
      description="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
    />
  </StyledFeatures>
);

export default Features;
