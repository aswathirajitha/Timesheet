import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodouserComponent } from './todouser.component';

describe('TodouserComponent', () => {
  let component: TodouserComponent;
  let fixture: ComponentFixture<TodouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodouserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
