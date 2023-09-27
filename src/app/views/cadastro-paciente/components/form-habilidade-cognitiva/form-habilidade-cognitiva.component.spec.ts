import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHabilidadeCognitivaComponent } from './form-habilidade-cognitiva.component';

describe('FormHabilidadeCognitivaComponent', () => {
  let component: FormHabilidadeCognitivaComponent;
  let fixture: ComponentFixture<FormHabilidadeCognitivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHabilidadeCognitivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHabilidadeCognitivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
