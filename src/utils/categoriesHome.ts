import React from "react";
import { SvgProps } from "react-native-svg";

import eyeIcon from "../assets/icons/hospital/045-eye dropper.svg";
import heartIcon from "../assets/icons/hospital/016-heart.svg";
import dentistIcon from "../assets/icons/hospital/051-dentist.svg";
import earIcon from "../assets/icons/hospital/023-ear.svg";
import boneIcon from "../assets/icons/hospital/014-broken bone.svg";

interface CategoryProps {
  Img: React.FC<SvgProps>;
  label: string;
  goTo: string;
}

export const categoriesHome: Array<CategoryProps> = [
  {
    Img: eyeIcon,
    label: "Oftalmologista",
    goTo: "oftalmologista",
  },
  {
    Img: heartIcon,
    label: "Cardiologista",
    goTo: "cardiologista",
  },
  {
    Img: dentistIcon,
    label: "Dentista",
    goTo: "dentista",
  },
  {
    Img: earIcon,
    label: "Otorrinolaringologista",
    goTo: "otorrinolaringologista",
  },
  {
    Img: boneIcon,
    label: "Ortopedista",
    goTo: "ortopedista",
  },
];
