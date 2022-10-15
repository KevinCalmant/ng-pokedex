import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexDetailtComponent } from './pokedex-detailt.component';

describe('PokedexDetailtComponent', () => {
  let component: PokedexDetailtComponent;
  let fixture: ComponentFixture<PokedexDetailtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexDetailtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexDetailtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
