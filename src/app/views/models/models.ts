export interface Sexo {
  value: string;
  viewValue: string;
}

export interface TipoFamiliar {
  value: string;
  viewValue: string;
}

export interface Habilidades {
  value: string;
  viewValue: string;
}

export interface DadosFamiliares {
  position: number;
  tipo: string;
  nome: string;
  idade: number;
  ocupacao: string;
}

export interface Medicamentos {
  position: number;
  nome: string;
  finalidade: string;
  dosagem: string;
  horario: string;
  data_inicio: string;
}

export interface HabilidadesCognitivas {
  nome: string;
  classificacao_habilidades: string;
}

export interface Dificuldades_Especificas {
  nome: string;
  possui: boolean;
}
