import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTopicsComponent } from './search-bar.component';

describe('UserComponent', () => {
  let component: SearchTopicsComponent;
  let fixture: ComponentFixture<SearchTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
