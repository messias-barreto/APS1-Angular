import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarApostasComponent } from './realizar-apostas.component';

describe('RealizarApostasComponent', () => {
  let component: RealizarApostasComponent;
  let fixture: ComponentFixture<RealizarApostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarApostasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarApostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
