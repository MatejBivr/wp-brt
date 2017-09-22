import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemerchComponent } from './singlemerch.component';

describe('SinglemerchComponent', () => {
  let component: SinglemerchComponent;
  let fixture: ComponentFixture<SinglemerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglemerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglemerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
