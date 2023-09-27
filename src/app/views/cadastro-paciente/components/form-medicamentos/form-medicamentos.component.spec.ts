import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMedicamentosComponent } from './form-medicamentos.component';

describe('FormMedicamentosComponent', () => {
  let component: FormMedicamentosComponent;
  let fixture: ComponentFixture<FormMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMedicamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
