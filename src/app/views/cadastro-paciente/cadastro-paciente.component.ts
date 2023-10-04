import { Component, OnInit, ViewChild } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { DadosFamiliares, Medicamentos,  Sexo, Habilidades } from '../models/models';
import { TabelaFamiliaresComponent } from './components/tabela-familiares/tabela-familiares.component';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit {

  familiaresControlsArray!: FormArray
  medicamentosControlsArray!: FormArray

  habilidades_cognitivas: Habilidades[] = [
    {value: 'ACM', viewValue: 'ACIMA DA MÉDIA'},
    {value: 'NM', viewValue: 'NA MÉDIA'},
    {value: 'ABM', viewValue: 'ABAIXO DA MÉDIA'},
    {value: 'DS', viewValue: 'DIFICULDADES SEVERAS'},
  ];

  displayedColumns: string[] = ['position', 'parentesco','nome', 'idade', 'ocupacao','delete'];
  dataSource: DadosFamiliares[] = [];

  displayedColumns1: string[] = ['position', 'nome', 'finalidade', 'dosagem', 'horario', 'data_inicio','delete'];
  dataSource1: Medicamentos[]= [];

  parte1: boolean = true;
  parte2: boolean = false;
  parte3: boolean = false;
  parte4: boolean = false;

  subparte1: boolean = true;

  formulario_familiar: FormGroup = this._formBuilder.group({
    nome: ['', Validators.required],
    tipo: ['', Validators.required],
    idade: ['', Validators.required],
    ocupacao: [''],
  })

  formulario_paciente: FormGroup = this._formBuilder.group({
    nome_paciente: ['',Validators.required],
    data_nascimento: ['',Validators.required],
    idade: ['',Validators.required],
    sexo: ['',Validators.required],
    naturalidade: ['',Validators.required],
    endereco: ['',Validators.required],
    email: ['', Validators.required],
    escola: ['', Validators.required],
    serie: ['', Validators.required],
    contato_escola: ['', Validators.required],
    educacao_na_familia: ['', Validators.required],
    rotina: ['', Validators.required],
    familiares: this._formBuilder.array([])
  })

    formulario_queixa: FormGroup = this._formBuilder.group({
      encaminhamento: ['', Validators.required,],
      queixa_principal: ['', Validators.required,],
      historia_preocupacao_atual: ['', Validators.required,],
      grau_prejuizo: ['', Validators.required,],
      reacao_familia_ambiente: ['', Validators.required,],
      antecedentes_familiares: ['', Validators.required,],
      tratamentos_anteriores: ['', Validators.required,],
      linguagem: ['', Validators.required,],
      medicacao_prescrita_por: ['', Validators.required,],
      medicamentos: this._formBuilder.array([])
    })

    formulario_medicamento: FormGroup = this._formBuilder.group({
      nome: ['', Validators.required,],
      finalidade: ['', Validators.required,],
      dosagem: ['', Validators.required,],
      horario: ['', Validators.required,],
      data_inicio: ['', Validators.required,],
    })

    formulario_area: FormGroup = this._formBuilder.group({
      nome: ['', Validators.required,],
    })

    formulario_aspectos: FormGroup = this._formBuilder.group({
      HAS1: this._formBuilder.group({
        nome:'Pesadelos',
        aspecto1 : false,
        descricao:''
      }),
      HAS2: this._formBuilder.group({
        nome:'Problemas para dormir',
        aspecto2: false,
        descricao:''
      }),
      HAS3: this._formBuilder.group({
        nome:'Come pouco',
        aspecto3: false,
        descricao:''
      }),
      HAS4: this._formBuilder.group({
        nome:'Come excessivamente',
        aspecto4: false,
       descricao:''
      }),
      DS1: this._formBuilder.group({
        nome:'Prefere ficar sozinho',
        aspecto5 : false,
        descricao:''
      }),
      DS2: this._formBuilder.group({
        nome:'Excessivamente quieto ou tímido',
        aspecto6 : false,
        descricao:''
      }),
      DS3: this._formBuilder.group({
        nome:'Mais interessado em objetos do que pessoas',
        aspecto7 : false,
        descricao:''
      }),
      DS4: this._formBuilder.group({
        nome:'Dificuldade em fazer amigos',
        aspecto8 : false,
        descricao:''
      }),
      DS5: this._formBuilder.group({
        nome:'Provocado por outras crianças',
        aspecto9 : false,
        descricao:''
      }),
      DS6: this._formBuilder.group({
        nome:'Provoca, ameaça intimida outras',
        aspecto10 : false,
        descricao:''
      }),
      DS7: this._formBuilder.group({
        nome:'Não procurado para estabelecer vínculo de crianças amizade por seus pares',
        aspecto11 : false,
        descricao:''
      }),
      DS8: this._formBuilder.group({
        nome:'Dificuldade em ver o ponto de vista de outra pessoa (se colocar no lugar do outro)',
        aspecto12 : false,
        descricao:''
      }),
      DS9: this._formBuilder.group({
        nome:'Não tem empatia com os outros',
        aspecto13 : false,
        descricao:''
      }),
      DS10: this._formBuilder.group({
        nome:'Confia demais nos outros',
        aspecto14 : false,
        descricao:''
      }),
      DS11: this._formBuilder.group({
        nome:'Não aprecia o humor',
        aspecto15: false,
        descricao:''
      }),
      C1: this._formBuilder.group({
        nome:'Teimoso',
        aspecto16: false,
        descricao:''
      }),
      C2: this._formBuilder.group({
        nome:'Facilmente Irritável, brava ou ressentida',
        aspecto17 : false,
        descricao:''
      }),
      C3: this._formBuilder.group({
        nome:'Birras frequentes',
        aspecto18 : false,
        descricao:''
      }),
      C4: this._formBuilder.group({
        nome:'Bate nos outros',
        aspecto19 : false,
        descricao:''
      }),

      C5: this._formBuilder.group({
        nome:'Joga ou destrói coisas',
        aspecto20 : false,
        descricao:''
      }),

      C6: this._formBuilder.group({
        nome:'Mente',
        aspecto21: false,
        descricao:''
      }),

      C7: this._formBuilder.group({
        nome:'Rouba',
        aspecto22 : false,
        descricao:''
      }),

      C8: this._formBuilder.group({
        nome:'Discute com os adultos',
        aspecto23 : false,
        descricao:''
      }),

      C9: this._formBuilder.group({
        nome:'Baixa tolerância a frustração',
        aspecto24 : false,
        descricao:''
      }),

      C10: this._formBuilder.group({
        nome:'Comportamento desafiador',
        aspecto25 : false,
        descricao:''
      }),

      C11: this._formBuilder.group({
        nome:'Foge',
        aspecto26: false,
        descricao:''
      }),

      C12: this._formBuilder.group({
        nome:'Necessita de muita supervisão',
        aspecto27 : false,
        descricao:''
      }),

      C13: this._formBuilder.group({
        nome:'Impulsivo (faz as coisas sem pensar)',
        aspecto28 : false,
        descricao:''
      }),

      C14: this._formBuilder.group({
        nome:'Pouca noção do perigo',
        aspecto29 : false,
        descricao:''
      }),

      C15: this._formBuilder.group({
        nome:'Falta a escola',
        aspecto30 : false,
        descricao:''
      }),

      C16: this._formBuilder.group({
        nome:'Perigoso para consigo mesmo ou com os outros',
        aspecto31: false,
        descricao:''
      }),

      C17: this._formBuilder.group({
        nome:'Machuca-se propositalmente',
        aspecto32 : false,
        descricao:''
      }),

      C18: this._formBuilder.group({
        nome:'Fala sobre se matar',
        aspecto33 : false,
        descricao:''
      }),

      C19: this._formBuilder.group({
        nome:'Medos incomuns, hábitos ou maneirismos',
        aspecto34 : false,
        descricao:''
      }),

      C20: this._formBuilder.group({
        nome:'Parece depressivo',
        aspecto35: false,
        descricao:''
      }),

      C21: this._formBuilder.group({
        nome:'Chora com frequência',
        aspecto36: false,
        descricao:''
      }),

      C22: this._formBuilder.group({
        nome:'Excessivamente preocupado e ansioso',
        aspecto37: false,
        descricao:''
      }),

      C23: this._formBuilder.group({
        nome:'Demasiadamente preocupado com detalhes',
        aspecto38: false,
        descricao:''
      }),

      C24: this._formBuilder.group({
        nome:'Demasiadamente apegado a certos objetos',
        aspecto39 : false,
        descricao:''
      }),

      C25: this._formBuilder.group({
        nome:'Não afetado por consequências negativas',
        aspecto40: false,
        descricao:''
      }),

      C26: this._formBuilder.group({
        nome:'Sexualmente ativo',
        aspecto41: false,
        descricao:''
      }),

      OD1: this._formBuilder.group({
        nome:'Problemas de controle vesical / enurese (não durante convulsão)',
        aspecto42: false,
        descricao:''
      }),

      OD2: this._formBuilder.group({
        nome:'Pouco controle esfincteriano / encoprese (se suja)',
        aspecto43: false,
        descricao:''
      }),

      OD3: this._formBuilder.group({
        nome:'Tiques motor ou vocal',
        aspecto44: false,
        descricao:''
      }),

      OD4: this._formBuilder.group({
        nome:'Reação exacerbada ao barulho',
        aspecto45: false,
        descricao:''
      }),

      OD5: this._formBuilder.group({
        nome:'Reação exacerbada ao toque',
        aspecto46: false,
        descricao:''
      }),

      OD6: this._formBuilder.group({
        nome:'Sonha acordado excessivamente e fantasia a vida',
        aspecto47: false,
        descricao:''
      }),

      OD7: this._formBuilder.group({
        nome:'Problemas com olfato e paladar',
        aspecto48: false,
        descricao:''
      }),

      HM1: this._formBuilder.group({
        nome:'Pouca coordenação motora fina',
        aspecto49: false,
        descricao:''
      }),
      HM2: this._formBuilder.group({
        nome:'Pouca coordenação motora ampla',
        aspecto50: false,
        descricao:''
      }),
    })

    formulario_aprendizado_escolarizacao: FormGroup = this._formBuilder.group({
      aprendizagens: ['', Validators.required,],
      historia_escolar: ['', Validators.required,],
      desempenho_disciplinas: ['', Validators.required,],
      vinculo_escola: ['', Validators.required,],
      habilidade_especial: ['', Validators.required,],
      habilidade_cognitiva: ['', Validators.required,],
    })

    formulario_habilidade_cognitiva: FormGroup = this._formBuilder.group({
      HC1: this._formBuilder.group({
        nome:'Fala',
        classificacao_habilidades: ''
      }),
      HC2: this._formBuilder.group({
        nome:'Compreensão da Fala',
        classificacao_habilidades: ['', Validators.required,]
      }),
      HC3: this._formBuilder.group({
        nome:'Resolução de Problemas',
        classificacao_habilidades: ['', Validators.required,]
      }),
      HC4: this._formBuilder.group({
        nome:'Span de atenção',
        classificacao_habilidades: ['', Validators.required,]
      }),
      HC5: this._formBuilder.group({
        nome:'Habilidades de Organização',
        classificacao_habilidades: ['', Validators.required,]
      }),
      HC6: this._formBuilder.group({
        nome:'Recordação de eventos',
        classificacao_habilidades: ['', Validators.required,]
      }),
      HC7: this._formBuilder.group({
        nome:'Recordação de Fatos',
        classificacao_habilidades: ['', Validators.required,]
      }),
      HC8: this._formBuilder.group({
        nome:'Aprendizagem a partir de experiências',
        classificacao_habilidades: ['', Validators.required,]
      }),
      HC9: this._formBuilder.group({
        nome:'Entendimento de conceitos',
        classificacao_habilidades: ['', Validators.required,]
      })

    })

    formulario_dificuldade_especifica: FormGroup = this._formBuilder.group({
      DE1: this._formBuilder.group({
        nome: 'Dificuldades de articulação',
        possui: ['', Validators.required,],
      }),
      DE2: this._formBuilder.group({
        nome: 'Dificuldades em encontrar palavras para expressar seus desejos',
        possui: ['', Validators.required,],
      }),
      DE3: this._formBuilder.group({
        nome: 'Fala desorganizada',
        possui: ['', Validators.required,],
      }),
      DE4: this._formBuilder.group({
        nome: 'Fala agramatical',
        possui: ['', Validators.required,],
      }),
      DE5: this._formBuilder.group({
        nome: 'Fala infantilizada',
        possui: ['', Validators.required,],
      }),
      DE6: this._formBuilder.group({
        nome: 'Aprendizagem lenta',
        possui: ['', Validators.required,],
      }),
      DE7: this._formBuilder.group({
        nome: 'Esquece de fazer as coisas',
        possui: ['', Validators.required,],
      }),
      DE8: this._formBuilder.group({
        nome: 'Distrai-se facilmente',
        possui: ['', Validators.required,],
      }),
      DE9: this._formBuilder.group({
        nome: 'Esquece freqüentemente das instruções',
        possui: ['', Validators.required,],
      }),
      DE10: this._formBuilder.group({
        nome: 'Perde freqüentemente os seus pertences',
        possui: ['', Validators.required,],
      }),
      DE11: this._formBuilder.group({
        nome: 'Dificuldade em planejar tarefas',
        possui: ['', Validators.required,],
      }),
      DE12: this._formBuilder.group({
        nome: 'Não prevê as conseqüências das ações',
        possui: ['', Validators.required,],
      }),
      DE13: this._formBuilder.group({
        nome: 'Pensamento lentificado',
        possui: ['', Validators.required,],
      }),
      DE14: this._formBuilder.group({
        nome: 'Dificuldade em lidar com dinheiro ou com a matemática',
        possui: ['', Validators.required,],
      }),
      DE15: this._formBuilder.group({
        nome: 'Pouca noção temporal',
        possui: ['', Validators.required,],
      }),

    })

    formulario_desenvolvimento_crianca: FormGroup = this._formBuilder.group({
      saude: ['', Validators.required,],
      alimentacao: ['', Validators.required,],
      sono: ['', Validators.required,],
    })

    formulario_antecedentes_pessoais: FormGroup = this._formBuilder.group({
      concepcao: ['', Validators.required,],
      gestacao: ['', Validators.required,],
      parto: ['', Validators.required,],
      dados_neonatais: ['', Validators.required,],
    })

    formulario_desenvolvimento_psicomotor: FormGroup = this._formBuilder.group({
      P1: this._formBuilder.group({
        pergunta: 'Firmou a cabeça:',
        resposta: ['', Validators.required,],
      }),
      P2: this._formBuilder.group({
        pergunta: 'Sentou sem apoio:',
        resposta: ['', Validators.required,],
      }),
      P3: this._formBuilder.group({
        pergunta: 'Engatinhou:',
        resposta: ['', Validators.required,],
      }),
      P4: this._formBuilder.group({
        pergunta: 'Ficou de pé:',
        resposta: ['', Validators.required,],
      }),
      P5: this._formBuilder.group({
        pergunta: 'Andou:',
        resposta: ['', Validators.required,],
      }),
      P6: this._formBuilder.group({
        pergunta: 'Teve controle dos esfíncteres',
        resposta: ['', Validators.required,],
      }),
      P7: this._formBuilder.group({
        pergunta: 'Como foi ensinado esse controle',
        resposta: ['', Validators.required,],
      }),
      P8: this._formBuilder.group({
        pergunta: 'É lento para realizar alguma tarefa',
        resposta: ['', Validators.required,],
      }),
      P9: this._formBuilder.group({
        pergunta: 'Veste-se, calça-se e toma banho sozinho',
        resposta: ['', Validators.required,],
      }),
      P10: this._formBuilder.group({
        pergunta: 'Sabe dar nós e laços',
        resposta: ['', Validators.required,],
      }),
      P11: this._formBuilder.group({
        pergunta: 'Anda de bicicleta? Desde quando?',
        resposta: ['', Validators.required,],
      }),
      P12: this._formBuilder.group({
        pergunta: 'Pratica alguma atividade física? Qual(is)?',
        resposta: ['', Validators.required,],
      }),
      P13: this._formBuilder.group({
        pergunta: 'É destro ou canhoto? Houve imposição para que usasse uma das mãos para escrever ou comer?:',
        resposta: ['', Validators.required,],
      }),
      P14: this._formBuilder.group({
        pergunta: 'Rói unhas? Em que situações? Hábito de morder roupa, brinquedo ou lápis constantemente?',
        resposta: ['', Validators.required,],
      }),
      P15: this._formBuilder.group({
        pergunta: 'Chupa dedo? Sucção de chupeta? Em que situações?',
        resposta: ['', Validators.required,],
      }),
      P16: this._formBuilder.group({
        pergunta: 'Tem tiques? Como são?',
        resposta: ['', Validators.required,],
      }),
      P17: this._formBuilder.group({
        pergunta: 'Tem alguma mania? Qual?',
        resposta: ['', Validators.required,],
      }),
      P18: this._formBuilder.group({
        pergunta: 'Precisa de ajuda para fazer alguma coisa? ',
        resposta: ['', Validators.required,],
      }),
    })

  @ViewChild(TabelaFamiliaresComponent) tabelaFamiliaresComponent: TabelaFamiliaresComponent;
  @ViewChild(MatTable) table1: MatTable<Medicamentos> | undefined;

  constructor(private _formBuilder: FormBuilder) { }

  adc_familiar(){

    this.familiaresControlsArray.push(this._formBuilder.group({
      nome: [this.formulario_familiar.get('nome')?.value],
      tipo: [this.formulario_familiar.get('tipo')?.value],
      idade:[this.formulario_familiar.get('idade')?.value],
      ocupacao: [this.formulario_familiar.get('ocupacao')?.value],
    }))

    const familiar = this.formulario_familiar.getRawValue()
    familiar.position = this.familiaresControlsArray.value.length

    // tabela familiares component
    this.tabelaFamiliaresComponent.dataSource?.push(familiar)
    this.tabelaFamiliaresComponent.renderRows()
    this.formulario_familiar.reset()
  }

  removerFamiliar(index: number){
    this.familiaresControlsArray.removeAt(index)
  }

  adc_medicamento(){
    if(this.formulario_medicamento.invalid) return

    this.medicamentosControlsArray.push(this._formBuilder.group({
      nome: [this.formulario_medicamento.get('nome')?.value],
      finalidade: [this.formulario_medicamento.get('finalidade')?.value],
      dosagem:[this.formulario_medicamento.get('dosagem')?.value],
      horario:[this.formulario_medicamento.get('horario')?.value],
      data_inicio: [this.formulario_medicamento.get('data_inicio')?.value],
    }))

    const medicamento = this.formulario_medicamento.getRawValue()
    medicamento.position=this.dataSource1.length+1
    this.dataSource1.push(medicamento)
    this.table1?.renderRows();
    this.formulario_medicamento.reset()
  }
  removerMedicamento(index: number){
    this.medicamentosControlsArray.removeAt(index)
  }

  deleteFamiliar(position: Event){
    // this.dataSource=this.dataSource.filter(e => e.position!= position)
    // // this.table!.renderRows();

    // this.removerFamiliar(position)
  }

  delete1(position:number){
    this.dataSource1=this.dataSource1.filter(e => e.position!= position)
    // this.table!.renderRows();
  }

  ngOnInit(): void {
    this.parte1 = true;
    this.familiaresControlsArray = this.formulario_paciente.get(['familiares']) as FormArray
    this.medicamentosControlsArray = this.formulario_queixa.get(['medicamentos']) as FormArray
  }

  nextStep2(){
    this.parte1 = false;
    this.parte2 = true;
    this.parte3 = false;
    this.parte4 = false;
    this.subparte1 = true;
  }

  nextStep3(){
    this.parte1 = false;
    this.parte2 = false;
    this.parte3 = true;
    this.parte4 = false;
  }

  nextStep4(){
    this.parte1 = false;
    this.parte2 = false;
    this.parte3 = false;
    this.parte4 = true;
  }

  save(){
    const data = this.formulario_queixa.getRawValue()
    console.log(data)
  }

  previousStep1 (event: FormGroup) {
    console.log(this.formulario_queixa.getRawValue())
    this.parte1 = true;
    this.parte2 = false;
    this.parte3 = false;
    this.parte4 = false;
  }

  previousStep2(){
    const data = this.formulario_queixa.getRawValue()
    console.log(data)
    this.parte1 = false;
    this.parte2 = true;
    this.parte3 = false;
    this.parte4 = false;
  }

  previousStep3(){
    this.parte1 = false;
    this.parte2 = false;
    this.parte3 = true;
    this.parte4 = false;
  }
}
