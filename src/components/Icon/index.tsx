import icons from "@/assets/svgs";
import { SVGprop } from "@/assets/svgs/types";

export type IconType = keyof typeof icons;

type Props = {
  name: IconType;
} & SVGprop;

export default function Icon({ name, ...rest }: Props) {
  const SelectedIcon = icons[name];
  return <SelectedIcon {...rest} />;
}
