interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export default function refreshUserValidate(credentials: User) {
  let errors = {} as User;

  if (credentials !== null) {
    if (!credentials?.firstName?.length ?? 0) {
      errors.firstName = "Campo de nome é necessário";
    }

    if (!credentials?.lastName?.length ?? 0) {
      errors.lastName = "Campo de nome é necessário";
    }

    const phoneNumbers = credentials?.phoneNumber?.replace(/[-.() ]/g, "");

    if (isNaN(parseInt(phoneNumbers))) {
      errors.phoneNumber = "Número de telefone inválido";
    } else if (phoneNumbers.length !== 11) {
      errors.phoneNumber = "Número de telefone inválido";
    } else if (!phoneNumbers.length ?? 0) {
      errors.phoneNumber = "Campo de telefone é necessário";
    }
  }

  return errors;
}
