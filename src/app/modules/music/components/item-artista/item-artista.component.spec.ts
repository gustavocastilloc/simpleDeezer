import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemArtistaComponent } from './item-artista.component';

describe('ItemArtistaComponent', () => {
  let component: ItemArtistaComponent;
  let fixture: ComponentFixture<ItemArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
