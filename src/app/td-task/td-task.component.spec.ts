import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTaskComponent } from './td-task.component';

describe('TdTaskComponent', () => {
  let component: TdTaskComponent;
  let fixture: ComponentFixture<TdTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
