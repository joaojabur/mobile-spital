import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ConsultPagesProps } from "../../../screens/Consult";
import SimpleHeader from "../../SimpleHeader";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../global/styles/theme";
import Line from "../../Line";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextArea from "../../TextArea";
import Button from "../../Button";
import api from "../../../services/api";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigation } from "@react-navigation/native";

const ConsultReview = ({ data, previousPage }: ConsultPagesProps) => {
  const navigation = useNavigation();
  const { userID } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const [clientID, setClientID] = useState<string>("");

  const [starValue, setStarValue] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  async function getClientId() {
    const response = await api.get(`clients?id=${userID}`);

    setClientID(response.data?.id);
  }

  useEffect(() => {
    setLoading(true);
    getClientId().then(() => {
      setLoading(false);
    });
  }, []);

  function handleSubmit() {
    setLoading(true);

    if (starValue === 0) {
      setError("Escolha uma estrela");
      setLoading(false);
    } else {
      api
        .post(`reviews?medicID=${data.medicID}&clientID=${clientID}`, {
          stars: starValue,
          description: message,
        })
        .then((response: any) => {
          console.log(response.data);

          if (response.data.success) {
            navigation.navigate("ReviewSuccess");
          } else {
            setError("Erro ao inserir avaliação...");
          }
          setLoading(false);
        });
    }
  }

  const { star, dark, primary100 } = theme.colors;

  return (
    <>
      <SimpleHeader returnFunction={previousPage} title="Avalie a consulta" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>O que você achou da consulta?</Text>
          <View style={styles.stars}>
            {[...Array(5)].map((starNumber, index) => {
              const ratingValue = index + 1;

              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    setStarValue(ratingValue);
                  }}
                  key={index}
                >
                  {ratingValue <= starValue ? (
                    <AntDesign
                      style={{ marginLeft: 10 }}
                      name="star"
                      size={40}
                      color={star}
                    />
                  ) : (
                    <AntDesign
                      style={{ marginLeft: 10 }}
                      name="staro"
                      size={40}
                      color={star}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.subtitle}>
            Escolha de 1 a 5 estrelas para classificar
          </Text>
          <View style={styles.line}>
            <Line />
          </View>

          <View style={styles.textTitle}>
            <MaterialCommunityIcons
              name="message-reply-text"
              size={20}
              color={dark}
            />

            <Text style={styles.textTitleText}>
              Avalie com suas próprias palavras
            </Text>

            <Text style={styles.maxCaracteres}>{message.length}/300</Text>
          </View>

          <TextArea
            value={message}
            onChangeText={(text) => {
              setMessage(text);
            }}
            maxLength={300}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          {loading ? (
            <ActivityIndicator size={50} color={primary100} />
          ) : (
            <View style={styles.button}>
              <Button onPress={handleSubmit} title="Avaliar" />
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ConsultReview;
