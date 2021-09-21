import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { TextInputMask } from "react-native-masked-text";
import Background from "../../components/Background";
import Button from "../../components/Button";
import SimpleHeader from "../../components/SimpleHeader";
import Input from "../../components/TextInput";
import { useAuth } from "../../context/AuthProvider";
import { theme } from "../../global/styles/theme";
import api from "../../services/api";
import refreshUserValidate from "../../utils/refreshUserValidate";
import { styles } from "./styles";

interface NewUserValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const Edit = () => {
  const { userID, setUser } = useAuth();
  const { primary100 } = theme.colors;

  const [loading, setLoading] = useState<boolean>(false);
  const [newUserValues, setNewUserValues] = useState<NewUserValues>(
    {} as NewUserValues
  );
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<NewUserValues>(
    refreshUserValidate(newUserValues)
  );

  useEffect(() => {
    setErrors(refreshUserValidate(newUserValues));
  }, [newUserValues]);

  const { user } = useAuth();

  useEffect(() => {
    setNewUserValues({
      ...newUserValues,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    });
  }, []);

  async function handleSubmit() {
    setLoading(true);
    const loopedErrors = Object.values(errors);
    if (loopedErrors.length > 0) {
      setError("O formulário possui erros");
      setLoading(false);
      setSuccess(null);
    } else {
      setError(null);

      await api
        .put(`clients/${userID}`, {
          fullName: `${newUserValues.firstName} ${newUserValues.lastName}`,
          phoneNumber: newUserValues.phoneNumber,
        })
        .then(() => {
          setLoading(false);
          setUser({
            ...user,
            firstName: newUserValues.firstName,
            lastName: newUserValues.lastName,
            phoneNumber: newUserValues.phoneNumber,
          });
          setSuccess("Dados atualizados com sucesso!");
        });
    }
  }

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
            {errors.firstName ? (
              <Text style={styles.error}>{errors.firstName}</Text>
            ) : null}

            <Text style={styles.inputsLabel}>Sobrenome</Text>
            <Input
              placeholder="Silva"
              value={newUserValues.lastName}
              onChangeText={(text) => {
                setNewUserValues({ ...newUserValues, lastName: text });
              }}
            />
            {errors.lastName ? (
              <Text style={styles.error}>{errors.lastName}</Text>
            ) : null}

            <Text style={styles.inputsLabel}>Telefone</Text>
            <TextInputMask
              type={"cel-phone"}
              placeholder="(11) 9 9131-3131"
              value={newUserValues.phoneNumber}
              style={styles.input}
              onChangeText={(text) => {
                setNewUserValues({ ...newUserValues, phoneNumber: text });
              }}
            />
            {errors.phoneNumber ? (
              <Text style={styles.error}>{errors.phoneNumber}</Text>
            ) : null}

            {error ? <Text style={styles.error}>{error}</Text> : null}
            {success ? <Text style={styles.success}>{success}</Text> : null}

            {loading ? (
              <ActivityIndicator size={50} color={primary100} />
            ) : (
              <View style={styles.button}>
                <Button onPress={handleSubmit} title="Atualizar dados" />
              </View>
            )}
          </View>
        </View>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default Edit;
