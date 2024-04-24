import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectFiltersPage } from './select-filters.page';

describe('SelectFiltersPage', () => {
  let component: SelectFiltersPage;
  let fixture: ComponentFixture<SelectFiltersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFiltersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
