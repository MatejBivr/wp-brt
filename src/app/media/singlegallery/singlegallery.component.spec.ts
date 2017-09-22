import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglegalleryComponent } from './singlegallery.component';

describe('SinglegalleryComponent', () => {
  let component: SinglegalleryComponent;
  let fixture: ComponentFixture<SinglegalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglegalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
