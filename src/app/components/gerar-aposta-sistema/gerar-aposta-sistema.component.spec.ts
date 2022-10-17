import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarApostaSistemaComponent } from './gerar-aposta-sistema.component';

describe('GerarApostaSistemaComponent', () => {
  let component: GerarApostaSistemaComponent;
  let fixture: ComponentFixture<GerarApostaSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarApostaSistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerarApostaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
