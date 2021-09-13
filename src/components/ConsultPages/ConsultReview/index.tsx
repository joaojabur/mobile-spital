import React from "react";
import { View } from "react-native";

import { ConsultPagesProps } from "../../../screens/Consult";
import SimpleHeader from "../../SimpleHeader";

const ConsultReview = ({ previousPage }: ConsultPagesProps) => {
  return (
    <>
      <SimpleHeader returnFunction={previousPage} title="Avalie a consulta" />
    </>
  );
};

export default ConsultReview;
