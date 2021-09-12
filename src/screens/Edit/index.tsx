import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Background from "../../components/Background";
import SimpleHeader from "../../components/SimpleHeader";
import Input from "../../components/TextInput";
import { styles } from "./styles";

const Edit = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <View style={styles.container}>
          <SimpleHeader title="Editar perfil" />

          <RectButton style={styles.image}>
            <Image
              style={styles.imageAvatar}
              source={{
                uri: "https://hsmuniversity.com.br/wp-content/uploads/2019/04/jeff_bezos-150x150.jpg",
              }}
            />

            <Text style={styles.imageText}>Alterar foto de perfil</Text>
          </RectButton>

          <View style={styles.inputs}>
            <Text style={styles.inputsLabel}>Nome</Text>
            <Input placeholder="João" />

            <Text style={styles.inputsLabel}>Sobrenome</Text>
            <Input placeholder="Silva" />

            <Text style={styles.inputsLabel}>Telefone</Text>
            <Input placeholder="(11) 9 9131-3131" />
          </View>
        </View>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default Edit;
