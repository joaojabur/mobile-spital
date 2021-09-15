import React, { useState } from "react";
import { Text, TouchableOpacity, View, Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

interface AccordionDetailsProps {
  label: string;
  text: string;
}

interface AccordionProps {
  title: string;
  handleFunction: () => void;
  items: Array<AccordionDetailsProps>;
}

const Accordion = ({ title, items, handleFunction }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [height, setHeight] = useState<any>(new Animated.Value(0));
  const [opacity, setOpacity] = useState<any>(new Animated.Value(0));

  const { dark, secondary100 } = theme.colors;

  async function handleOpenAccordion() {
    await setIsOpen(!isOpen);

    await Animated.timing(height, {
      toValue: isOpen ? 0 : 130,
      duration: 500,
      useNativeDriver: false,
    }).start();

    await Animated.timing(opacity, {
      toValue: isOpen ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View>
      <TouchableOpacity onPress={handleOpenAccordion} style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <RectButton style={styles.downButton}>
          <AntDesign name="down" size={24} color={dark} />
        </RectButton>
      </TouchableOpacity>
      <Animated.View
        style={[styles.content, { height: height, opacity: opacity }]}
      >
        <View style={styles.details}>
          {items.map((item: AccordionDetailsProps, index: number) => {
            return (
              <View key={index} style={styles.detailsFlex}>
                <Text style={styles.detailBold}>{item.label}:</Text>

                <Text style={styles.detail}>
                  {item.text}
                </Text>
              </View>
            );
          })}
        </View>

        <TouchableOpacity onPress={handleFunction} style={styles.handleButton}>
          <Feather name="edit" size={28} color={secondary100} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Accordion;
