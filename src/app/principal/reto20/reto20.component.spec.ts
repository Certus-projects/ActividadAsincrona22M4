import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto20Component } from './reto20.component';

describe('Reto20Component', () => {
  let component: Reto20Component;
  let fixture: ComponentFixture<Reto20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reto20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
