import React, { ReactNode, useState } from "react";

import Background from "../../components/Background";

import Info from "../../components/MedicComponents/Info";
import Appointment from "../../components/MedicComponents/Appointment";
import Payment from "../../components/MedicComponents/Payment";
import Card from "../../components/MedicComponents/Card";

export interface MedicPagesProps {
  nextPage?: () => void;
  previousPage?: () => void;
}

const Medic = () => {
  const [page, setPage] = useState(0);

  const pages: Array<ReactNode> = [
    <Info nextPage={nextPage} />,
    <Appointment nextPage={nextPage} previousPage={previousPage} />,
    <Payment nextPage={nextPage} previousPage={previousPage} />,
    <Card previousPage={previousPage} />,
  ];

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  return <Background>{pages[page]}</Background>;
};

export default Medic;
