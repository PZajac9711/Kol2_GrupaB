import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PzForumComponent } from './pz-forum.component';

describe('PzForumComponent', () => {
  let component: PzForumComponent;
  let fixture: ComponentFixture<PzForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PzForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PzForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
