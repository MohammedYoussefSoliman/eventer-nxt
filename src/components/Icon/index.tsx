import icons from "@/assets/svgs";
import { SVGprop } from "@/assets/svgs/types";

export type IconType = keyof typeof icons;

type Props = {
  name: IconType;
  dataTest?: string;
} & SVGprop;

export default function Icon({ name, dataTest, ...rest }: Props) {
  const SelectedIcon = icons[name];
  return <SelectedIcon dataTest={dataTest || `icon-${name}`} {...rest} />;
}
