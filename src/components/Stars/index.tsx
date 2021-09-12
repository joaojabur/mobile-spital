import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface StarsProps {
  rating: number;
  color?: string;
  background?: string;
}

const { star, gray } = theme.colors;

const Stars = ({ rating, color = star, background = gray }: StarsProps) => {
  let stars = [0, 0, 0, 0, 0];

  for (let i = 0; i < 5; i++) {
    if (1 <= rating - 1 * i) {
      stars[i] = 1;
    } else {
      stars[i] = rating - 1 * i;
      break;
    }
  }

  return (
    <View style={styles.stars}>
      {stars.map((star, index) => {
        var id = "id" + Math.random().toString(16).slice(2);

        if (star) {
          return (
            <View key={index} style={styles.container}>
              <AntDesign
                name="star"
                size={30}
                color={color}
                style={{ position: "absolute", left: 0, zIndex: 2 }}
              />
              <AntDesign
                name="star"
                size={30}
                color="#000"
                style={{ position: "absolute", left: 0, zIndex: 1 }}
              />
            </View>
          );
        }

        return <AntDesign key={id} name="star" size={30} color={background} />;
      })}
    </View>
  );
};

export default Stars;
