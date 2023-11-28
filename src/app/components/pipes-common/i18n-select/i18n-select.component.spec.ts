import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nSelectComponent } from './i18n-select.component';

describe('I18nSelectComponent', () => {
  let component: I18nSelectComponent;
  let fixture: ComponentFixture<I18nSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [I18nSelectComponent]
    });
    fixture = TestBed.createComponent(I18nSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
