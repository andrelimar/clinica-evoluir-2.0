import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesenPsicomotorPartIIIComponent } from './form-desen-psicomotor-part-iii.component';

describe('FormDesenPsicomotorPartIIIComponent', () => {
  let component: FormDesenPsicomotorPartIIIComponent;
  let fixture: ComponentFixture<FormDesenPsicomotorPartIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDesenPsicomotorPartIIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDesenPsicomotorPartIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
