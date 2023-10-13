import { Horario } from "./Horarios";
import { Terapeuta } from "./Terapeutas";

export interface Agendamento {
  id: string;
  solicitante: string;
  nomeTerapeuta: Terapeuta;
  dataAgendamento: Date;
  horarioAgendamento: Horario;
  descricao: string;
}
