import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Paciente, Programas_paciente } from '../models/registroAba.model';



let listaProgramas: Programas_paciente[] = [
];

@Component({
  selector: 'app-programas-paciente',
  templateUrl: './programas-paciente.component.html',
  styleUrls: ['./programas-paciente.component.scss']
})
export class ProgramasPacienteComponent implements OnInit {

  formulario_programas_paciente: FormGroup = this._formBuilder.group({
    nome_paciente: ['',Validators.required],
    programa: ['',Validators.required],
    numero_de_tentativas: ['',Validators.required],
  })

  displayedColumns1: string[] = ['position', 'programa', 'numero_de_tentativas','delete'];
  dataSource = listaProgramas;

  @ViewChild(MatTable) table: MatTable<Programas_paciente> | undefined;


  constructor(private _formBuilder: FormBuilder) {
   }

  adc_programas_pacientes(){
      const programas_paciente = this.formulario_programas_paciente.getRawValue()
    programas_paciente.position=this.dataSource.length+1
    this.dataSource.push(programas_paciente)
    this.table?.renderRows();
  }

  delete(position:number){
    this.dataSource=this.dataSource.filter(e => e.position!= position)
    this.table!.renderRows();
  }

  ngOnInit(): void {
  }

  save(){
    const data = this.formulario_programas_paciente.getRawValue()
    console.log(data)
  }

}
