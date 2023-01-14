import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeWaitComponent } from './poke-wait.component';

describe('PokeWaitComponent', () => {
  let component: PokeWaitComponent;
  let fixture: ComponentFixture<PokeWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeWaitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
