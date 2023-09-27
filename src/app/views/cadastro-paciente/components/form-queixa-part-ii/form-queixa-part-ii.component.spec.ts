import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQueixaPartIIComponent } from './form-queixa-part-ii.component';

describe('FormQueixaPartIIComponent', () => {
  let component: FormQueixaPartIIComponent;
  let fixture: ComponentFixture<FormQueixaPartIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormQueixaPartIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormQueixaPartIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
