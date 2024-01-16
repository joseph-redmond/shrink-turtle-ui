import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinkPageComponent } from './shrink.page.component';

describe('ShrunkPageComponent', () => {
  let component: ShrinkPageComponent;
  let fixture: ComponentFixture<ShrinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShrinkPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShrinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
