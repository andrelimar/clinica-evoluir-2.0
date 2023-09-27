import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgramaPacientePartIComponent } from './form-programa-paciente-part-i.component';

describe('FormProgramaPacientePartIComponent', () => {
  let component: FormProgramaPacientePartIComponent;
  let fixture: ComponentFixture<FormProgramaPacientePartIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProgramaPacientePartIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProgramaPacientePartIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
