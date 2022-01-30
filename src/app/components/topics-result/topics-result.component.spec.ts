import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsResultComponent } from './topics-result.component';

describe('RepositoryComponent', () => {
  let component: TopicsResultComponent;
  let fixture: ComponentFixture<TopicsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
