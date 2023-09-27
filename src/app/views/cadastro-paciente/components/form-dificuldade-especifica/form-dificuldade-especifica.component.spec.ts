import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDificuldadeEspecificaComponent } from './form-dificuldade-especifica.component';

describe('FormDificuldadeEspecificaComponent', () => {
  let component: FormDificuldadeEspecificaComponent;
  let fixture: ComponentFixture<FormDificuldadeEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDificuldadeEspecificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDificuldadeEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
