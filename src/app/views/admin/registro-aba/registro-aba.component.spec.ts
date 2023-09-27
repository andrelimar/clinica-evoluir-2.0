import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAbaComponent } from './registro-aba.component';

describe('RegistroAbaComponent', () => {
  let component: RegistroAbaComponent;
  let fixture: ComponentFixture<RegistroAbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
