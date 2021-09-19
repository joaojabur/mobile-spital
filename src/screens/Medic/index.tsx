import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import Background from "../../components/Background";

import Info from "../../components/MedicComponents/Info";
import Appointment from "../../components/MedicComponents/Appointment";
import Payment from "../../components/MedicComponents/Payment";
import Card from "../../components/MedicComponents/Card";
import api from "../../services/api";
import getWeekday from "../../utils/calculateWeekday";
import MedicProvider from "../../context/MedicProvider";
import convertDate from "../../utils/convertDate";

export interface ConsultTypeProps {
  type: string;
  price: string;
}

export interface AppointmentProps {
  date: string;
  time: string;
  inOn: boolean;
}

export interface ScheduleProps {
  id: number;
  scheduleID: number;
  medicID: number;
  created_at: string;
  from: string;
  to: string;
  week_day: number;
}

export interface MedicPagesProps {
  nextPage: () => void;
  previousPage?: () => void;
  medic: MedicProps;
  workday?: ScheduleProps;
  loading?: boolean;
  types?: Array<ConsultTypeProps>;
  day: string;
  setDay: Dispatch<SetStateAction<string>>;
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
  const today = new Date();
  const formattedToday = convertDate(today);

  const [day, setDay] = useState<string>(formattedToday);

  const [workday, setWorkday] = useState<ScheduleProps>({} as ScheduleProps);

  const [medic, setMedic] = useState<MedicProps>({} as MedicProps);

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

  useEffect(() => {
    setLoading(true);
    getMedicData();
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
      day={day}
      setDay={setDay}
    />,
    <Appointment
      medic={medic}
      nextPage={nextPage}
      previousPage={previousPage}
      day={day}
      setDay={setDay}
    />,
    <Payment
      medic={medic}
      nextPage={nextPage}
      previousPage={previousPage}
      day={day}
      setDay={setDay}
    />,
    <Card
      nextPage={nextPage}
      previousPage={previousPage}
      day={day}
      setDay={setDay}
      medic={medic}
    />,
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
