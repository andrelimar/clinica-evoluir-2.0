import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TipoFamiliar } from 'src/app/views/models/models';

@Component({
  selector: 'app-form-familiar',
  templateUrl: './form-familiar.component.html',
  styleUrls: ['./form-familiar.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormFamiliarComponent implements OnInit {

  @Input() formulario_familiar!: FormGroup

  tiposfamiliares: TipoFamiliar[] = [
    {value: 'Pai', viewValue: 'PAI'},
    {value: 'Mãe', viewValue: 'MÂE'},
    {value: 'Irmão', viewValue: 'IRMÂO'},
    {value: 'Irmã', viewValue: 'IRMÃ'},
    {value: 'Outro', viewValue: 'OUTRO'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
