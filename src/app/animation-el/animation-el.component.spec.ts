import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationElComponent } from './animation-el.component';

describe('AnimationElComponent', () => {
  let component: AnimationElComponent;
  let fixture: ComponentFixture<AnimationElComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationElComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
