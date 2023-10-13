import { Horario } from "./Horarios";
import { Terapeuta } from "./Terapeutas";

export interface Agendamento {
  id: string;
  solicitante: string;
  terapeuta: Terapeuta;
  dataAgendamento: Date;
  horarioAgendamento: Horario;
  descricao: string;
}
