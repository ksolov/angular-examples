import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRepeateComponent } from './my-repeate.component';

describe('MyRepeateComponent', () => {
  let component: MyRepeateComponent;
  let fixture: ComponentFixture<MyRepeateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRepeateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRepeateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
