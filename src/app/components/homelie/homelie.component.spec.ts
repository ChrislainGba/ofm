import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelieComponent } from './homelie.component';

describe('HomelieComponent', () => {
  let component: HomelieComponent;
  let fixture: ComponentFixture<HomelieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
