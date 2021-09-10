import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

interface SimpleHeaderProps {
  title: string;
  component?: ReactNode;
  action?: () => void;
}

const SimpleHeader = ({ title, component, action }: SimpleHeaderProps) => {
  const { dark } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleGoBack} style={styles.returnContainer}>
        <Entypo name="chevron-left" size={34} color={dark} />
      </RectButton>

      <Text style={styles.title}>{title}</Text>

      {component ? (
        <RectButton onPress={action} style={styles.componentContainer}>{component}</RectButton>
      ) : (
        <View style={{ width: 40, height: 40 }}></View>
      )}
    </View>
  );
};

export default SimpleHeader;
