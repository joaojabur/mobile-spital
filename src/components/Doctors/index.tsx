import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import Doctor from "../Doctor";
import LoadMoreButton from "../LoadMoreButton";

import { styles } from "./styles";

interface DoctorsProps extends ScrollViewProps {}

const Doctors = ({ ...rest }: DoctorsProps) => {
  return (
    <ScrollView
      {...rest}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      <Doctor />
      <LoadMoreButton />
    </ScrollView>
  );
};

export default Doctors;
