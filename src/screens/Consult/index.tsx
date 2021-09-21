import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { View } from "react-native";

import { styles } from "./styles";

import Background from "../../components/Background";
import ConsultDetails from "../../components/ConsultPages/ConsultDetails";
import ConsultReview from "../../components/ConsultPages/ConsultReview";
import { AppointmentsProps } from "../Consults";
import api from "../../services/api";

export interface ConsultPagesProps {
  nextPage?: () => void;
  previousPage?: () => void;
  data: AppointmentsProps;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Consult = ({ route }: any) => {
  const { scheduleID } = route.params;
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<AppointmentsProps>({} as AppointmentsProps);

  async function getData() {
    setLoading(true);
    const response = await api.get(`appointments?scheduleID=${scheduleID}`);

    setData(response.data[0]);
  }

  useEffect(() => {
    getData().then(() => {
      setLoading(false);
    });
  }, [scheduleID]);

  const pages: Array<ReactNode> = [
    <ConsultDetails
      setLoading={setLoading}
      loading={loading}
      data={data}
      nextPage={nextPage}
    />,
    <ConsultReview
      setLoading={setLoading}
      loading={loading}
      data={data}
      previousPage={previousPage}
    />,
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
