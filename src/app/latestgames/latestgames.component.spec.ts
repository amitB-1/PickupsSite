import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestgamesComponent } from './latestgames.component';

describe('LatestgamesComponent', () => {
  let component: LatestgamesComponent;
  let fixture: ComponentFixture<LatestgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
