import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusNotGoodComponent } from './status-not-good.component';

describe('StatusNotGoodComponent', () => {
  let component: StatusNotGoodComponent;
  let fixture: ComponentFixture<StatusNotGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusNotGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusNotGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
