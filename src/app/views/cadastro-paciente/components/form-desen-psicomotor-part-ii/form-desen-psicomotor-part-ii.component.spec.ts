import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesenPsicomotorPartIIComponent } from './form-desen-psicomotor-part-ii.component';

describe('FormDesenPsicomotorPartIIComponent', () => {
  let component: FormDesenPsicomotorPartIIComponent;
  let fixture: ComponentFixture<FormDesenPsicomotorPartIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDesenPsicomotorPartIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDesenPsicomotorPartIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
