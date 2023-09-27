import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgramaPacientePartIIComponent } from './form-programa-paciente-part-ii.component';

describe('FormProgramaPacientePartIIComponent', () => {
  let component: FormProgramaPacientePartIIComponent;
  let fixture: ComponentFixture<FormProgramaPacientePartIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProgramaPacientePartIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProgramaPacientePartIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
