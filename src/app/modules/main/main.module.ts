import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import {
  ErrorComponent,
  FooterComponent,
  HeaderComponent,
} from 'src/app/components';
import { MainComponent } from './main.component';
import { MAIN_ROUTES } from 'src/app/routes';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(MAIN_ROUTES)],
  exports: [],
  providers: [],
})
export class MainModule {}
