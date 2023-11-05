import React from "react";
import styled from "@emotion/styled";
import { P3 } from "@/components/Typography";
import { Flex } from "@/components/Grids";
import images from "@/assets/images";
type Props = {
  label: string;
  image?: string;
};

const Image = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
`;

export default function AsyncLabel({ label, image }: Props) {
  return (
    <Flex align="center" gap={{ xs: 6, md: 8, lg: 16 }}>
      {image ? (
        <Image src={image} alt="logo" />
      ) : (
        <Image src={images.AVATAR} alt="logo" />
      )}
      <P3 text={label} />
    </Flex>
  );
}
