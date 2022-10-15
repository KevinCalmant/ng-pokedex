import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexCardSkeletonComponent } from './pokedex-card-skeleton.component';

describe('PokedexCardSkeletonComponent', () => {
  let component: PokedexCardSkeletonComponent;
  let fixture: ComponentFixture<PokedexCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexCardSkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
