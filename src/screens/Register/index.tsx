import { useNavigation } from "@react-navigation/native";
import React, { ReactNode, useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

import Background from "../../components/Background";
import Credentials from "../../components/RegisterPages/Credentials";
import Name from "../../components/RegisterPages/Name";
import Phone from "../../components/RegisterPages/Phone";
import Review from "../../components/RegisterPages/Review";
import SimpleHeader from "../../components/SimpleHeader";
import RegisterProvider from "../../context/RegisterProvider";

import { styles } from "./styles";

export interface RegisterPageProps {
  nextPage: () => void;
}

const Register = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState<number>(0);

  const pages: Array<ReactNode> = [
    <Name nextPage={nextPage} />,
    <Credentials nextPage={nextPage} />,
    <Phone nextPage={nextPage} />,
    <Review
      returnName={returnName}
      returnCredentials={returnCredentials}
      returnPhone={returnPhone}
      nextPage={nextPage}
    />,
  ];

  function goBack() {
    navigation.goBack();
  }

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  function returnName() {
    setPage(0);
  }

  function returnCredentials() {
    setPage(1);
  }

  function returnPhone() {
    setPage(2);
  }

  return (
    <RegisterProvider>
      <Background>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <SimpleHeader
            returnFunction={page === 0 ? goBack : previousPage}
            title="Registrar"
          />
          {pages[page]}
        </KeyboardAvoidingView>
      </Background>
    </RegisterProvider>
  );
};

export default Register;
