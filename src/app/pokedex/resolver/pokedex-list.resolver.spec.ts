import { TestBed } from '@angular/core/testing';

import { PokedexListResolver } from './pokedex-list.resolver';

describe('PokedexListResolver', () => {
  let resolver: PokedexListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokedexListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
