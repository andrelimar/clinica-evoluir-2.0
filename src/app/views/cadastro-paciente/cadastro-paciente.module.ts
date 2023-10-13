import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPacienteComponent } from './cadastro-paciente.component';
import { MaterialModule } from 'src/app/angular-material-module.module';
import { CadastroPacienteoutingModule } from './cadastr-paciente.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPacienteComponent } from './components/form-paciente/form-paciente.component';
import { FormQueixaComponent } from './components/form-queixa/form-queixa.component';
import { FormMedicamentosComponent } from './components/form-medicamentos/form-medicamentos.component';
import { FormAspectosComponent } from './components/form-aspectos/form-aspectos.component';
import { FormAspectosPartIiComponent } from './components/form-aspectos-part-ii/form-aspectos-part-ii.component';
import { FormAspectosPartIIIComponent } from './components/form-aspectos-part-iii/form-aspectos-part-iii.component';
import { FormAspectosPartIVComponent } from './components/form-aspectos-part-iv/form-aspectos-part-iv.component';
import { FormAspectosPartVComponent } from './components/form-aspectos-part-v/form-aspectos-part-v.component';
import { FormFamiliarComponent } from './components/form-familiar/form-familiar.component';
import { FormQueixaPartIIComponent } from './components/form-queixa-part-ii/form-queixa-part-ii.component';
import { FormQueixaPartIIIComponent } from './components/form-queixa-part-iii/form-queixa-part-iii.component';
import { FormAprendizadoEscolarizacaoComponent } from './components/form-aprendizado-escolarizacao/form-aprendizado-escolarizacao.component';
import { FormHabilidadeCognitivaComponent } from './components/form-habilidade-cognitiva/form-habilidade-cognitiva.component';
import { FormDificuldadeEspecificaComponent } from './components/form-dificuldade-especifica/form-dificuldade-especifica.component';
import { FormDesenPsicomotorComponent } from './components/form-desen-psicomotor/form-desen-psicomotor.component';
import { FormDesenPsicomotorPartIIComponent } from './components/form-desen-psicomotor-part-ii/form-desen-psicomotor-part-ii.component';
import { FormDesenPsicomotorPartIIIComponent } from './components/form-desen-psicomotor-part-iii/form-desen-psicomotor-part-iii.component';
import { FormAntecedentesPessoaisComponent } from './components/form-antecedentes-pessoais/form-antecedentes-pessoais.component';
import { FormDesenCriancaComponent } from './components/form-desen-crianca/form-desen-crianca.component';
import { FormPacientePartIIComponent } from './components/form-paciente-part-ii/form-paciente-part-ii.component';
import { FormAprendizadoEscolarizacaoPartIIComponent } from './components/form-aprendizado-escolarizacao-part-ii/form-aprendizado-escolarizacao-part-ii.component';
import { TabelaFamiliaresComponent } from './components/tabela-familiares/tabela-familiares.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HeaderSubtitleComponent } from 'src/app/components/subtitle/subtitle.component';

@NgModule({
  declarations: [
    CadastroPacienteComponent,
    FormPacienteComponent,
    FormQueixaComponent,
    FormMedicamentosComponent,
    FormAspectosComponent,
    FormAspectosPartIiComponent,
    FormAspectosPartIIIComponent,
    FormAspectosPartIVComponent,
    FormAspectosPartVComponent,
    FormFamiliarComponent,
    FormQueixaPartIIComponent,
    FormQueixaPartIIIComponent,
    FormAprendizadoEscolarizacaoComponent,
    FormHabilidadeCognitivaComponent,
    FormDificuldadeEspecificaComponent,
    FormDesenPsicomotorComponent,
    FormDesenPsicomotorPartIIComponent,
    FormDesenPsicomotorPartIIIComponent,
    FormAntecedentesPessoaisComponent,
    FormDesenCriancaComponent,
    FormPacientePartIIComponent,
    FormAprendizadoEscolarizacaoPartIIComponent,
    TabelaFamiliaresComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CadastroPacienteoutingModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeaderSubtitleComponent
  ],
})
export class CadastroPacienteModule { }
