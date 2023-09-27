import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesenPsicomotorComponent } from './form-desen-psicomotor.component';

describe('FormDesenPsicomotorComponent', () => {
  let component: FormDesenPsicomotorComponent;
  let fixture: ComponentFixture<FormDesenPsicomotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDesenPsicomotorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDesenPsicomotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
