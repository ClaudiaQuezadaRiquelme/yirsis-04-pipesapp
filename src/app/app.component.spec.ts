import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DarkModePipe } from './shared/pipes/dark-mode.pipe';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { CustomPipesModule } from './components/custom-pipes/custom-pipes.module';

describe('AppComponent', () => {
  beforeEach(async () => await TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      DarkModePipe,
    ],
    imports: [
      PipesCommonModule,
      CustomPipesModule,
    ],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
