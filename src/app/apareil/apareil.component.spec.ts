import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApareilComponent } from './apareil.component';

describe('ApareilComponent', () => {
  let component: ApareilComponent;
  let fixture: ComponentFixture<ApareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApareilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
