import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionNavigatorComponent } from './region-navigator.component';

describe('RegionNavigatorComponent', () => {
  let component: RegionNavigatorComponent;
  let fixture: ComponentFixture<RegionNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
