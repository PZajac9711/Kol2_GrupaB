import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PzForumItemComponent } from './pz-forum-item.component';

describe('PzForumItemComponent', () => {
  let component: PzForumItemComponent;
  let fixture: ComponentFixture<PzForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PzForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PzForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
