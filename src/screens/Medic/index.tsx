import React, { ReactNode, useEffect, useState } from "react";

import Background from "../../components/Background";

import Info from "../../components/MedicComponents/Info";
import Appointment from "../../components/MedicComponents/Appointment";
import Payment from "../../components/MedicComponents/Payment";
import Card from "../../components/MedicComponents/Card";
import api from "../../services/api";
import getWeekday from "../../utils/calculateWeekday";
import MedicProvider from "../../context/MedicProvider";

interface ConsultTypeProps {
  type: string;
  price: string;
}

interface ScheduleProps {
  id: number;
  scheduleID: number;
  medicID: number;
  created_at: string;
  from: string;
  to: string;
  week_day: number;
}

export interface MedicPagesProps {
  nextPage?: () => void;
  previousPage?: () => void;
  medic?: MedicProps;
  workday?: ScheduleProps;
  loading?: boolean;
  types?: Array<ConsultTypeProps>;
}

export interface MedicProps {
  id: string | undefined;
  userID: string;
  area: string;
  birth_date: string;
  cpf: string;
  doctorate_degree: string;
  graduation: string;
  rg: string;
  phoneNumber: string;
  master_degree: string;
  firstName: string;
  lastName: string;
  email: string;
  rating: string;
  location: {
    address: string;
    number: number;
  };
  url: string;
}

const Medic = ({ route, navigation }: any) => {
  const [workday, setWorkday] = useState<ScheduleProps>({} as ScheduleProps);
  const [schedule, setSchedule] = useState<Array<ScheduleProps>>(
    [] as Array<ScheduleProps>
  );
  const [medic, setMedic] = useState<MedicProps>({} as MedicProps);
  const [consultTypes, setConsultTypes] = useState<Array<ConsultTypeProps>>(
    [] as Array<ConsultTypeProps>
  );

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const date = new Date();
  const dateString = date.toString();
  const week_day = dateString.split(" ")[0];

  const number_week_day = getWeekday(week_day);

  const { id, medicID } = route.params;

  async function getMedicData() {
    const medic = await api.get(`medics?id=${id}`);

    setMedic(medic.data);
  }

  async function getWorkDay() {
    const work_day = await api.get(
      `medic-schedule?medicID=${medicID}&week_day=${number_week_day}`
    );

    setWorkday(work_day.data[0]);
  }

  async function getConsultTypes() {
    const types = await api.get(`consult-type?medicID=${medic.id}`);

    setConsultTypes(types.data);
  }

  useEffect(() => {
    setLoading(true);
    getMedicData();
    getConsultTypes();
    getWorkDay().then(() => {
      setLoading(false);
    });
  }, []);

  const pages: Array<ReactNode> = [
    <Info
      loading={loading}
      medic={medic}
      workday={workday}
      nextPage={nextPage}
    />,
    <Appointment types={consultTypes} nextPage={nextPage} previousPage={previousPage} />,
    <Payment nextPage={nextPage} previousPage={previousPage} />,
    <Card previousPage={previousPage} />,
  ];

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  return (
    <MedicProvider>
      <Background>{pages[page]}</Background>
    </MedicProvider>
  );
};

export default Medic;
