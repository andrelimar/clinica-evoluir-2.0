import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesenCriancaComponent } from './form-desen-crianca.component';

describe('FormDesenCriancaComponent', () => {
  let component: FormDesenCriancaComponent;
  let fixture: ComponentFixture<FormDesenCriancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDesenCriancaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDesenCriancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
