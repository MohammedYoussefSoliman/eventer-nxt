import images from "@/assets/images";
import Wrapper from "./styles";

type Props = {
  image?: string;
  dataTest?: string;
};

export default function Avatar({ image, dataTest }: Props) {
  return (
    <Wrapper data-testid={dataTest}>
      {image ? (
        <img src={image} alt="avatar_image" />
      ) : (
        <img src={images.AVATAR} alt="avatar_image" />
      )}
    </Wrapper>
  );
}
