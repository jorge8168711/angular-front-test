import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { MAIN_ROUTES } from 'src/app/routes/main.routes';
import {
  ErrorComponent,
  FooterComponent,
  HeaderComponent,
} from 'src/app/components';
import { MainComponent } from './main.component';

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
