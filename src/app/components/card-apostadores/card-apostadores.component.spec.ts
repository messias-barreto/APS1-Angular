import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApostadoresComponent } from './card-apostadores.component';

describe('CardApostadoresComponent', () => {
  let component: CardApostadoresComponent;
  let fixture: ComponentFixture<CardApostadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardApostadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardApostadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
