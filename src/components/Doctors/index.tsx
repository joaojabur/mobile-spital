import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import Doctor from "../Doctor";
import LoadMoreButton from "../LoadMoreButton";

import { styles } from "./styles";

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
}

const Doctors = ({ doctors, ...rest }: DoctorsProps) => {
  return (
    <ScrollView
      {...rest}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {doctors.map((doctor: Medic) => {
        return <Doctor key={doctor.userID} data={doctor} />;
      })}
      <LoadMoreButton />
    </ScrollView>
  );
};

export default Doctors;
