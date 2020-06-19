import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PzForumDetailsComponent } from './pz-forum-details.component';

describe('PzForumDetailsComponent', () => {
  let component: PzForumDetailsComponent;
  let fixture: ComponentFixture<PzForumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PzForumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PzForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
