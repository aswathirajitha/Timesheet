import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbComponent } from './adminb.component';

describe('AdminbComponent', () => {
  let component: AdminbComponent;
  let fixture: ComponentFixture<AdminbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
