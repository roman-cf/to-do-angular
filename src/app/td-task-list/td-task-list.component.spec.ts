import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTaskListComponent } from './td-task-list.component';

describe('TdTaskListComponent', () => {
  let component: TdTaskListComponent;
  let fixture: ComponentFixture<TdTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
