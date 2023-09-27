import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAspectosPartIIIComponent } from './form-aspectos-part-iii.component';

describe('FormAspectosPartIIIComponent', () => {
  let component: FormAspectosPartIIIComponent;
  let fixture: ComponentFixture<FormAspectosPartIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAspectosPartIIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAspectosPartIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
