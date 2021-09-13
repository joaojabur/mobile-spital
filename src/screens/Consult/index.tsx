import React, { ReactNode, useState } from "react";
import { View } from "react-native";

import { styles } from "./styles";

import Background from "../../components/Background";
import ConsultDetails from "../../components/ConsultPages/ConsultDetails";
import ConsultReview from "../../components/ConsultPages/ConsultReview";

export interface ConsultPagesProps {
  nextPage?: () => void;
  previousPage?: () => void;
}

const Consult = () => {
  const pages: Array<ReactNode> = [
    <ConsultDetails nextPage={nextPage} />,
    <ConsultReview previousPage={previousPage} />,
  ];

  const [page, setPage] = useState<number>(0);

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  return (
    <Background>
      <View style={styles.container}>{pages[page]}</View>
    </Background>
  );
};

export default Consult;
