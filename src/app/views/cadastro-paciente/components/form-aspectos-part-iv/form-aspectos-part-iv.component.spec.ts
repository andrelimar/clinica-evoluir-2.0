import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAspectosPartIVComponent } from './form-aspectos-part-iv.component';

describe('FormAspectosPartIVComponent', () => {
  let component: FormAspectosPartIVComponent;
  let fixture: ComponentFixture<FormAspectosPartIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAspectosPartIVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAspectosPartIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
