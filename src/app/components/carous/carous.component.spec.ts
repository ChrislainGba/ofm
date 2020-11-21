import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousComponent } from './carous.component';

describe('CarousComponent', () => {
  let component: CarousComponent;
  let fixture: ComponentFixture<CarousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
