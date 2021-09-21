import React from "react";
import { ActivityIndicator, ScrollView, ScrollViewProps } from "react-native";
import Doctor from "../Doctor";
import LoadMoreButton from "../LoadMoreButton";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import Button from "../Button";
import { RectButton } from "react-native-gesture-handler";

export interface Medic {
  id: number;
  firstName: string;
  email: string;
  phoneNumber: string;
  lastName: string;
  area: string;
  userID: number;
  distance: number;
  rating: string;
  url: string;
  address: string;
  graduation: string;
  master_degree: string | null;
  doctorate_degree: string | null;
  xp: number;
  recipientID: string;
  crm: string;
}

interface DoctorsProps extends ScrollViewProps {
  doctors: Array<Medic>;
  loading: boolean;
  loadMoreFunction: () => void;
}

const Doctors = ({
  loading,
  loadMoreFunction,
  doctors,
  ...rest
}: DoctorsProps) => {
  const { primary100 } = theme.colors;

  return (
    <ScrollView
      {...rest}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {doctors.map((doctor: Medic) => {
        return <Doctor key={doctor.userID} data={doctor} />;
      })}

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size={50}
          color={primary100}
        />
      ) : (
        <RectButton style={styles.button}>
          <Button onPress={loadMoreFunction} title="Carregar mais" />
        </RectButton>
      )}
    </ScrollView>
  );
};

export default Doctors;
