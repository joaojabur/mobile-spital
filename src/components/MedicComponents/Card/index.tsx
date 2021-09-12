import React from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

import { styles } from "./styles";

import { MedicPagesProps } from "../../../screens/Medic";
import SimpleHeader from "../../SimpleHeader";
import TextInput from "../../TextInput";
import { RectButton } from "react-native-gesture-handler";
import GreenButton from "../../GreenButton";
import { useNavigation } from "@react-navigation/native";

const Card = ({ previousPage }: MedicPagesProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <SimpleHeader returnFunction={previousPage} title="Pagamento" />

        <View style={styles.content}>
          <Text style={styles.title}>Detalhes de pagamento</Text>

          <View style={styles.form}>
            <View style={styles.formWrap}>
              <Text style={styles.inputsLabel}>Nome no cartão</Text>
              <TextInput placeholder="Digite o nome..." />
            </View>

            <View style={styles.formWrap}>
              <Text style={styles.inputsLabel}>Número do cartão</Text>
              <TextInput placeholder="Digite o número..." />
            </View>

            <View
              style={[
                styles.formWrap,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View style={styles.half}>
                <Text style={styles.inputsLabel}>Expiração</Text>
                <TextInput placeholder="Digite a data de expiração..." />
              </View>
              <View style={styles.half}>
                <Text style={styles.inputsLabel}>CVV</Text>
                <TextInput placeholder="Digite o CVV..." />
              </View>
            </View>

            <View style={styles.formWrap}>
              <Text style={styles.inputsLabel}>CPF</Text>
              <TextInput
                onAccessibilityTap={() => {
                  console.log("Hello world!");
                }}
                placeholder="Digite o CPF..."
              />
            </View>

            <RectButton style={styles.button}>
              <GreenButton title="Agendar consulta" />
            </RectButton>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Card;
