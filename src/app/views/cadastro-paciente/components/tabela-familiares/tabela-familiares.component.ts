import { Component, Output, OnChanges, OnInit, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DadosFamiliares } from 'src/app/views/models/models';

@Component({
  selector: 'app-tabela-familiares',
  templateUrl: './tabela-familiares.component.html',
  styleUrls: ['./tabela-familiares.component.scss', '../../cadastro-paciente.component.scss']
})
export class TabelaFamiliaresComponent implements OnInit, OnChanges {

  public dataSource: DadosFamiliares[] = []
  displayedColumns: string[] = ['position', 'parentesco','nome', 'idade', 'ocupacao','delete'];

  @ViewChild(MatTable) table: MatTable<DadosFamiliares> | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
  }

  public  renderRows(){
    this.table?.renderRows()
  }

  confirmDelete(element: number){
      this.dataSource=this.dataSource.filter(e => e.position!= element)
    this.table!.renderRows();
  }
}
