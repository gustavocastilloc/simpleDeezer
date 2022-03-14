import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarporletraComponent } from './buscarporletra.component';

describe('BuscarporletraComponent', () => {
  let component: BuscarporletraComponent;
  let fixture: ComponentFixture<BuscarporletraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarporletraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarporletraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
