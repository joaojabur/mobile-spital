import calculateMonth from "./calculateMonth";

function convertDate(date: Date) {
  const stringDate = date.toString();

  const splittedDate = stringDate.split(" ");
  const stringMonth = splittedDate[1];

  const month = calculateMonth(stringMonth);
  const day = splittedDate[2];
  const year = splittedDate[3];

  const finalString = `${year}-${
    month.toString.length > 1 ? month : `0${month}`
  }-${day}`;

  return finalString;
}

export default convertDate;
