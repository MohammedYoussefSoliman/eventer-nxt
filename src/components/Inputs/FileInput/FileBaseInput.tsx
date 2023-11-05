import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "@/components/Grids";
import Icon from "@/components/Icon";
import { IconButton } from "@/components/Buttons";
import { P3 } from "@/components/Typography";
import { FileInputPropsType } from "../types";
import { ImageWrapper, SmallImagePlaceHolder } from "../styles";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

export default function BaseFileInput({
  name,
  label,
  error,
  className,
  variant = "wide",
  required,
  onChange,
  watch,
  url,
  setValue,
  changeHandler,
  ...InputProps
}: FileInputPropsType) {
  const { colors } = useTheme();

  const handleDelete = async () => {
    setValue(name, undefined);
  };

  const imageFile: FileList = watch(name);

  return (
    <Flex
      className={className}
      width={{ xs: "100%", md: "auto" }}
      direction="column"
      gap={{ xs: 5, md: 8 }}
    >
      {label && <InputLabel label={label} required={required} />}

      <ImageWrapper
        className="input--wrapper"
        error={!!error}
        align="center"
        justify="space-between"
      >
        <input
          className="input"
          type="file"
          {...InputProps}
          accept="image/*"
          onChange={onChange}
        />
        {imageFile && (
          <IconButton
            className="remove--button"
            icon="trash"
            size="sm"
            color={colors.text.error}
            onClick={handleDelete}
          />
        )}

        {imageFile && variant === "wide" ? (
          <img
            className="preview"
            src={URL.createObjectURL(imageFile[0])}
            alt="preview"
          />
        ) : imageFile && variant === "small" ? (
          <Flex align="center" justify="center" fullHeight fullWidth>
            <div className="small-prev">
              <img
                className="preview"
                src={URL.createObjectURL(imageFile[0])}
                alt="preview"
              />
            </div>
          </Flex>
        ) : url ? (
          <img className="preview" src={url} alt="preview" />
        ) : variant === "wide" ? (
          <Flex
            direction="column"
            align="center"
            justify="center"
            fullHeight
            fullWidth
          >
            <Flex
              className="cloud--wrapper"
              mb="16px"
              align="center"
              justify="center"
            >
              <Icon name="cloud" color={colors.pallet[0]} />
            </Flex>
            <P3 color={colors.text.greyish} weight={300}>
              <span className="text--highlight">Click to upload</span>
              <span> or drag and drop</span>
            </P3>
            <P3
              text="SVG, PNG, JPG or GIF (max. 800x400px)"
              color={colors.text.greyish}
              weight={300}
            />
          </Flex>
        ) : (
          <Flex
            direction="column"
            align="center"
            justify="center"
            fullHeight
            fullWidth
          >
            <SmallImagePlaceHolder
              direction="column"
              align="center"
              justify="center"
            >
              <Icon name="cloud" color={colors.pallet[0]} />
              <P3>Click to upload</P3>
              <P3
                text="or drag and drop"
                color={colors.text.greyish}
                weight={300}
              />
            </SmallImagePlaceHolder>
          </Flex>
        )}
      </ImageWrapper>
      {error && <InputError error={error} />}
    </Flex>
  );
}
