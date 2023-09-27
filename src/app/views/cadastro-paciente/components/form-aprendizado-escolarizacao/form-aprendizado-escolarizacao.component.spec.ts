import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAprendizadoEscolarizacaoComponent } from './form-aprendizado-escolarizacao.component';

describe('FormAprendizadoEscolarizacaoComponent', () => {
  let component: FormAprendizadoEscolarizacaoComponent;
  let fixture: ComponentFixture<FormAprendizadoEscolarizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAprendizadoEscolarizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAprendizadoEscolarizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
