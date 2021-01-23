import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatCoreModule } from 'src/app/shared/mat-core/mat-core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './welcome/login/login.component';

@NgModule({
  declarations: [WelcomeComponent, LoginComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatCoreModule,
    ReactiveFormsModule,
    CoreModule,
  ],
})
export class WelcomeModule {}
