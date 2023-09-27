import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAspectosPartVComponent } from './form-aspectos-part-v.component';

describe('FormAspectosPartVComponent', () => {
  let component: FormAspectosPartVComponent;
  let fixture: ComponentFixture<FormAspectosPartVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAspectosPartVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAspectosPartVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
