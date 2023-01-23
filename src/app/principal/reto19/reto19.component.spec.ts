import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto19Component } from './reto19.component';

describe('Reto19Component', () => {
  let component: Reto19Component;
  let fixture: ComponentFixture<Reto19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reto19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
