import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGoodComponent } from './status-good.component';

describe('StatusGoodComponent', () => {
  let component: StatusGoodComponent;
  let fixture: ComponentFixture<StatusGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
