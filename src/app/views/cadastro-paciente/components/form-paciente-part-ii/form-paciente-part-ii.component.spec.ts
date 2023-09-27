import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPacientePartIIComponent } from './form-paciente-part-ii.component';

describe('FormPacientePartIIComponent', () => {
  let component: FormPacientePartIIComponent;
  let fixture: ComponentFixture<FormPacientePartIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPacientePartIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPacientePartIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
