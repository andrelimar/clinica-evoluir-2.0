import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAntecedentesPessoaisComponent } from './form-antecedentes-pessoais.component';

describe('FormAntecedentesPessoaisComponent', () => {
  let component: FormAntecedentesPessoaisComponent;
  let fixture: ComponentFixture<FormAntecedentesPessoaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAntecedentesPessoaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAntecedentesPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
