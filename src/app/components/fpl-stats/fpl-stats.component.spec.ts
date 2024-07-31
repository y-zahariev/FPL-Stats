import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FplStatsComponent } from './fpl-stats.component';

describe('FplStatsComponent', () => {
  let component: FplStatsComponent;
  let fixture: ComponentFixture<FplStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FplStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FplStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
