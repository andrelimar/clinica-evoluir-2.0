import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAspectosComponent } from './form-aspectos.component';

describe('FormAspectosComponent', () => {
  let component: FormAspectosComponent;
  let fixture: ComponentFixture<FormAspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAspectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
