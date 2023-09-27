import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQueixaPartIIIComponent } from './form-queixa-part-iii.component';

describe('FormQueixaPartIIIComponent', () => {
  let component: FormQueixaPartIIIComponent;
  let fixture: ComponentFixture<FormQueixaPartIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormQueixaPartIIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormQueixaPartIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
