import React from "react";
import { ScrollView, ScrollViewProps, View } from "react-native";
import ConsultsViewItem from "../ConsultsViewItem";
import { styles } from "./styles";

interface Consults extends ScrollViewProps {}

const ConsultsView = ({ ...rest }: Consults) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      {...rest}
    >
      <View style={styles.content}>
        <ConsultsViewItem />
        <ConsultsViewItem />
        <ConsultsViewItem />
        <ConsultsViewItem />
        <ConsultsViewItem />
        <ConsultsViewItem />
        <ConsultsViewItem />
        <ConsultsViewItem />
      </View>
    </ScrollView>
  );
};

export default ConsultsView;
