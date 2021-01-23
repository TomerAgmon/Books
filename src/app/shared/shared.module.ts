import { MatCoreModule } from './mat-core/mat-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [PageNotFoundComponent, SplashScreenComponent],
  imports: [CommonModule, MatCoreModule],
  exports: [SplashScreenComponent],
})
export class SharedModule {}
