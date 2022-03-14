import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarporArtistaComponent } from './buscarpor-artista.component';

describe('BuscarporArtistaComponent', () => {
  let component: BuscarporArtistaComponent;
  let fixture: ComponentFixture<BuscarporArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarporArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarporArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
