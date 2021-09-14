import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { ConsultPagesProps } from "../../../screens/Consult";
import SimpleHeader from "../../SimpleHeader";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../global/styles/theme";
import Line from "../../Line";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextArea from "../../TextArea";
import Button from "../../Button";

const ConsultReview = ({ previousPage }: ConsultPagesProps) => {
  const [starValue, setStarValue] = useState<number>(0);

  const { star, dark } = theme.colors;

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
              size={28}
              color={dark}
            />

            <Text style={styles.textTitleText}>
              Avalie com suas próprias palavras
            </Text>

            <Text style={styles.maxCaracteres}>0/300</Text>
          </View>

          <TextArea />

          <View style={styles.button}>
            <Button title="Avaliar" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ConsultReview;
