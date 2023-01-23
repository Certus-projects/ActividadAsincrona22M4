import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoformregistroComponent } from './retoformregistro.component';

describe('RetoformregistroComponent', () => {
  let component: RetoformregistroComponent;
  let fixture: ComponentFixture<RetoformregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoformregistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoformregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
