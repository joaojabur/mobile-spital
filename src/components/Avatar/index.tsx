import React from "react";
import { Image, ImageProps } from "react-native";
import { styles } from "./styles";

interface AvatarProps extends ImageProps {
  uri: string;
}

const Avatar = ({ uri, ...rest }: AvatarProps) => {
  return <Image style={styles.container} {...rest} source={{ uri: uri }} resizeMethod="resize" />;
};

export default Avatar;
