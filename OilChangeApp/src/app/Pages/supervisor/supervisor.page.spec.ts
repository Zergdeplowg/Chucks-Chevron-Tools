import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupervisorPage } from './supervisor.page';

describe('SupervisorPage', () => {
  let component: SupervisorPage;
  let fixture: ComponentFixture<SupervisorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
