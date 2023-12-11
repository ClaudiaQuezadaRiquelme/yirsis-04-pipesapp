import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { TextComponent } from '../text/text.component';
import { NumbersComponent } from '../numbers/numbers.component';
import { DateComponent } from '../date/date.component';
import { JsonComponent } from '../json/json.component';
import { KeyValueComponent } from '../key-value/key-value.component';
import { SliceComponent } from '../slice/slice.component';
import { I18nSelectComponent } from '../i18n-select/i18n-select.component';
import { I18nPluralComponent } from '../i18n-plural/i18n-plural.component';
import { AsyncComponent } from '../async/async.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        TextComponent,
        NumbersComponent,
        DateComponent,
        JsonComponent,
        KeyValueComponent,
        SliceComponent,
        I18nSelectComponent,
        I18nPluralComponent,
        AsyncComponent,
      ]
    });
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
