import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFamiliaresComponent } from './tabela-familiares.component';

describe('TabelaFamiliaresComponent', () => {
  let component: TabelaFamiliaresComponent;
  let fixture: ComponentFixture<TabelaFamiliaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaFamiliaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaFamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
