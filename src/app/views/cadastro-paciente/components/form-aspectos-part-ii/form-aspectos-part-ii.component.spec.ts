import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAspectosPartIiComponent } from './form-aspectos-part-ii.component';

describe('FormAspectosPartIiComponent', () => {
  let component: FormAspectosPartIiComponent;
  let fixture: ComponentFixture<FormAspectosPartIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAspectosPartIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAspectosPartIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
