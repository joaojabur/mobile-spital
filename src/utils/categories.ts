import React from "react";
import { SvgProps } from "react-native-svg";

import eyeIcon from "../assets/icons/hospital/045-eye dropper.svg";
import heartIcon from "../assets/icons/hospital/016-heart.svg";
import dentistIcon from "../assets/icons/hospital/051-dentist.svg";
import earIcon from "../assets/icons/hospital/023-ear.svg";
import boneIcon from "../assets/icons/hospital/014-broken bone.svg";
import lungsIcon from "../assets/icons/hospital/041-lungs.svg";
import brainIcon from "../assets/icons/hospital/026-brain.svg";
import sickIcon from "../assets/icons/hospital/015-sick.svg";
import kidneyIcon from "../assets/icons/hospital/052-kidney.svg";
import urologyIcon from "../assets/icons/hospital/053-urology.svg";
import bloodIcon from "../assets/icons/hospital/044-blood bag.svg";
import virusIcon from "../assets/icons/hospital/005-virus.svg";
import colonIcon from "../assets/icons/hospital/054-colon.svg";
import dermisIcon from "../assets/icons/hospital/055-dermis.svg";
import endocrinologyIcon from "../assets/icons/hospital/056-endocrinology.svg";
import stomachIcon from "../assets/icons/hospital/057-stomach.svg";
import gynecologyIcon from "../assets/icons/hospital/058-gynecology.svg";
import bacteriaIcon from "../assets/icons/hospital/059-bacteria.svg";
import nutrologyIcon from "../assets/icons/hospital/060-nutrology.svg";
import obstetricsIcon from "../assets/icons/hospital/061-obstetrics.svg";
import pediatricsIcon from "../assets/icons/hospital/062-pediatrician.svg";
import radiologyIcon from "../assets/icons/hospital/025-x ray.svg";
import radiotherapyIcon from "../assets/icons/hospital/063-radiotherapy.svg";
import muscleIcon from "../assets/icons/hospital/064-muscle.svg";
import angiologyIcon from "../assets/icons/hospital/065-globulos-vermelhos.svg";

interface CategoryProps {
  Img: React.FC<SvgProps>;
  label: string;
  goTo: string;
}

export const categories: Array<CategoryProps> = [
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
  {
    Img: lungsIcon,
    label: "Pneumologista",
    goTo: "pneumologista",
  },
  {
    Img: brainIcon,
    label: "Neurologista",
    goTo: "neurologista",
  },
  {
    Img: sickIcon,
    label: "Geriatra",
    goTo: "geriatra",
  },
  {
    Img: kidneyIcon,
    label: "Nefrologista",
    goTo: "nefrologista",
  },
  {
    Img: urologyIcon,
    label: "Urologista",
    goTo: "urologista",
  },
  {
    Img: bloodIcon,
    label: "Hematologista",
    goTo: "hematologista",
  },
  {
    Img: bacteriaIcon,
    label: "Alergista e Imunologista",
    goTo: "alergistas-e-imunologista",
  },
  {
    Img: colonIcon,
    label: "Coloproctologista",
    goTo: "coloproctologista",
  },
  {
    Img: dermisIcon,
    label: "Demartologista",
    goTo: "dermatologista",
  },
  {
    Img: endocrinologyIcon,
    label: "Endocrinologista",
    goTo: "endocrinologista",
  },
  {
    Img: stomachIcon,
    label: "Gastroenterologista",
    goTo: "gastroenterologista",
  },
  {
    Img: gynecologyIcon,
    label: "Ginecologista",
    goTo: "ginecologista",
  },
  {
    Img: virusIcon,
    label: "Infectologista",
    goTo: "infectologista",
  },
  {
    Img: nutrologyIcon,
    label: "Nutrologo",
    goTo: "nutrologo",
  },
  {
    Img: obstetricsIcon,
    label: "Obstetricista",
    goTo: "obstetricista",
  },
  {
    Img: pediatricsIcon,
    label: "Pediatra",
    goTo: "pediatra",
  },
  {
    Img: radiologyIcon,
    label: "Radiologista",
    goTo: "radiologista",
  },
  {
    Img: radiotherapyIcon,
    label: "Radioterapista",
    goTo: "radioterapista",
  },
  {
    Img: muscleIcon,
    label: "Reumatologista",
    goTo: "reumatologista",
  },
  {
    Img: angiologyIcon,
    label: "Angiologista",
    goTo: "angiologista",
  },
];
