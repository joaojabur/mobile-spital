import React from "react";
import { Text, View } from "react-native";
import Background from "../../components/Background";
import SimpleHeader from "../../components/SimpleHeader";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

const Login = () => {
  const { secondary100 } = theme.colors;

  return (
    <Background>
      <View style={styles.container}>
        <SimpleHeader
          title="Entrar"
          component={
            <MaterialCommunityIcons
              name="information"
              size={24}
              color={secondary100}
            />
          }
        />

        <View style={styles.content}>
          <Text style={styles.title}>Insira suas credenciais</Text>

          <View style={styles.form}></View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
