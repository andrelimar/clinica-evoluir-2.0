import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAprendizadoEscolarizacaoPartIIComponent } from './form-aprendizado-escolarizacao-part-ii.component';

describe('FormAprendizadoEscolarizacaoPartIIComponent', () => {
  let component: FormAprendizadoEscolarizacaoPartIIComponent;
  let fixture: ComponentFixture<FormAprendizadoEscolarizacaoPartIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAprendizadoEscolarizacaoPartIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAprendizadoEscolarizacaoPartIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
