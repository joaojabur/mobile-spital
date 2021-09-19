interface CpfErrors {
  cpf: string | null;
}

import validateCPF from "./validateCpf";

export default function checkCpf(cpf: string) {
  const cpfNumbers = cpf.replace(/[-. ]/g, "") ?? "0";

  let errors = {} as CpfErrors;
  if (!cpfNumbers?.length ?? 0) {
    errors.cpf = "Campo de CPF é necessário";
  } else if (validateCPF({ cpf: cpfNumbers })) {
    errors.cpf = "CPF inválido";
  }

  if (errors.cpf) {
    return false;
  } else {
    return true;
  }
}
