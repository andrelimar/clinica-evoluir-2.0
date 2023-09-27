import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQueixaComponent } from './form-queixa.component';

describe('FormQueixaComponent', () => {
  let component: FormQueixaComponent;
  let fixture: ComponentFixture<FormQueixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormQueixaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormQueixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
