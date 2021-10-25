import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRowComponent } from './currency-row.component';

describe('CurrencyRowComponent', () => {
  let component: CurrencyRowComponent;
  let fixture: ComponentFixture<CurrencyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
