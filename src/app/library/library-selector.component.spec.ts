import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySelectorComponent } from './library-selector.component';

describe('LibrarySelectorComponent', () => {
  let component: LibrarySelectorComponent;
  let fixture: ComponentFixture<LibrarySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
