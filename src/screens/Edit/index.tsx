import React, { useEffect, useState } from "react";
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
import { useAuth } from "../../context/AuthProvider";
import { styles } from "./styles";

interface NewUserValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const Edit = () => {
  const [newUserValues, setNewUserValues] = useState<NewUserValues>(
    {} as NewUserValues
  );

  const { user } = useAuth();

  useEffect(() => {
    setNewUserValues({
      ...newUserValues,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    });
  }, []);

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
            <Input
              placeholder="João"
              value={newUserValues.firstName}
              onChangeText={(text) => {
                setNewUserValues({ ...newUserValues, firstName: text });
              }}
            />

            <Text style={styles.inputsLabel}>Sobrenome</Text>
            <Input
              placeholder="Silva"
              value={newUserValues.lastName}
              onChangeText={(text) => {
                setNewUserValues({ ...newUserValues, lastName: text });
              }}
            />

            <Text style={styles.inputsLabel}>Telefone</Text>
            <Input
              placeholder="(11) 9 9131-3131"
              value={newUserValues.phoneNumber}
              onChangeText={(text) => {
                setNewUserValues({ ...newUserValues, phoneNumber: text });
              }}
            />
          </View>
        </View>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default Edit;
