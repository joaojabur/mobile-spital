import React from "react";
import { ScrollView, ScrollViewProps, Text, View } from "react-native";
import { AppointmentsProps } from "../../screens/Consults";
import ConsultsViewItem from "../ConsultsViewItem";
import { styles } from "./styles";

interface Consults extends ScrollViewProps {
  data: Array<AppointmentsProps>;
}

const ConsultsView = ({ data, ...rest }: Consults) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      {...rest}
    >
      <View style={styles.content}>
        {data.length === 0 ? (
          <Text style={styles.empty}></Text>
        ) : (
          data.map((consult) => {
            return (
              <ConsultsViewItem data={consult} key={consult.transactionID} />
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

export default ConsultsView;
