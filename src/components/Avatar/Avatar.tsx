import images from "@/assets/images";
import Wrapper from "./styles";

type Props = {
  image?: string;
};

export default function Avatar({ image }: Props) {
  return (
    <Wrapper>
      {image ? (
        <img src={image} alt="avatar_image" />
      ) : (
        <img src={images.AVATAR} alt="avatar_image" />
      )}
    </Wrapper>
  );
}
