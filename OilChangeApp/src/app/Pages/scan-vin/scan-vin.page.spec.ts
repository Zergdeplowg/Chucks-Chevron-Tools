import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanVinPage } from './scan-vin.page';

describe('ScanVinPage', () => {
  let component: ScanVinPage;
  let fixture: ComponentFixture<ScanVinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanVinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
