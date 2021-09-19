import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";

import { styles } from "./styles";

import { MedicPagesProps } from "../../../screens/Medic";
import SimpleHeader from "../../SimpleHeader";
import TextInput from "../../TextInput";
import { RectButton } from "react-native-gesture-handler";
import GreenButton from "../../GreenButton";
import { TextInputMask } from "react-native-masked-text";
import checkCpf from "../../../utils/checkCpf";
import { useMedic } from "../../../context/MedicProvider";
import api from "../../../services/api";
import { useAuth } from "../../../context/AuthProvider";
import { theme } from "../../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";
const { MoipValidator } = require("moip-sdk-js");

interface CardProps {
  holder_name: string;
  number: string;
  cvc: string;
  expiration: string;
}

const Card = ({ medic, previousPage }: MedicPagesProps) => {
  const navigation = useNavigation();

  const { primary100 } = theme.colors;
  const { userID } = useAuth();
  const [clientID, setClientID] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const { appointmentData } = useMedic();

  const [error, setError] = useState<string | null>(null);

  const [card, setCard] = useState<CardProps>({} as CardProps);
  const [cpf, setCpf] = useState<string>("");

  async function getClientId() {
    const response = await api.get(`clients?userID=${userID}`);

    setClientID(response.data[0]?.id);
  }

  useEffect(() => {
    getClientId();
  }, []);

  function checkCreditCard() {
    const [month, year] = card.expiration.split("/");

    const isNumberCorrect = MoipValidator.isValidNumber(card.number);
    const isCvcCorrect = MoipValidator.isSecurityCodeValid(
      card.number,
      card.cvc
    );
    const isExpirationCorrect = MoipValidator.isExpiryDateValid(month, year);
    const isCpfCorrect = checkCpf(cpf);

    if (
      isNumberCorrect &&
      isCvcCorrect &&
      isExpirationCorrect &&
      isNumberCorrect &&
      isCpfCorrect
    ) {
      return true;
    } else {
      return false;
    }
  }

  async function handleSubmit() {
    setLoading(true);
    const date = `${appointmentData?.date?.month}/${appointmentData?.date?.day}/${appointmentData?.date?.year}`;

    const isCardCorrect = checkCreditCard();

    if (isCardCorrect) {
      const [month, year] = card.expiration.split("/");
      const cardNumber = card.number.replace(" ", "");

      setError(null);
      setLoading(true);

      api
        .post(`appointments?clientID=${clientID}&medicID=${medic.id}`, {
          card: null,
          cardData: {
            number: cardNumber,
            holder_name: card.holder_name,
            exp_month: Number(month),
            exp_year: Number(year),
            cvv: card.cvc,
          },
          date,
          cpf,
          appointmentData,
        })
        .then((response) => {
          if (response.data.success) {
            navigation.navigate("OrderSuccess");
          } else {
            setError("Erro ao realizar o pagamento");
          }
          setLoading(false);
        })
        .catch((err) => {
          if (err) {
            setError("Erro ao realizar o pagamento");
            setLoading(false);
          }
        });
    } else {
      setError("Dados do cartão ou cpf inválidos!");
    }
  }

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
              <TextInput
                value={card.holder_name}
                onChangeText={(text) => {
                  setCard({ ...card, holder_name: text });
                }}
                placeholder="Digite o nome..."
              />
            </View>

            <View style={styles.formWrap}>
              <Text style={styles.inputsLabel}>Número do cartão</Text>
              <TextInputMask
                value={card.number}
                onChangeText={(text) => {
                  setCard({ ...card, number: text });
                }}
                type={"credit-card"}
                style={styles.input}
                placeholder="Digite o número..."
              />
            </View>

            <View
              style={[
                styles.formWrap,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View style={styles.half}>
                <Text style={styles.inputsLabel}>Expiração</Text>
                <TextInputMask
                  type={"custom"}
                  options={{
                    mask: "99/99",
                  }}
                  value={card.expiration}
                  onChangeText={(text) => {
                    setCard({ ...card, expiration: text });
                  }}
                  placeholder="Digite a data de expiração..."
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.half}>
                <Text style={styles.inputsLabel}>CVV</Text>
                <TextInputMask
                  type={"custom"}
                  options={{
                    mask: "999",
                  }}
                  value={card.cvc}
                  onChangeText={(text) => {
                    setCard({ ...card, cvc: text });
                  }}
                  placeholder="Digite o CVV..."
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.formWrap}>
              <Text style={styles.inputsLabel}>CPF</Text>
              <TextInputMask
                value={cpf}
                onChangeText={(text) => {
                  setCpf(text);
                }}
                type={"cpf"}
                placeholder="Digite o CPF..."
                style={styles.input}
                keyboardType="numeric"
              />
            </View>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            {loading ? (
              <ActivityIndicator
                style={{ marginTop: 10 }}
                size={100}
                color={primary100}
              />
            ) : (
              <RectButton onPress={handleSubmit} style={styles.button}>
                <GreenButton onPress={handleSubmit} title="Agendar consulta" />
              </RectButton>
            )}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Card;
