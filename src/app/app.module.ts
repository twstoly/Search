import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundDirective } from './Directives/background/background.directive';
import { CustomPipePipe } from './Pipes/customPipe/custom-pipe.pipe';
import { NavcomponentComponent } from './Components/navcomponent/navcomponent.component';
import { FooterComponent } from './Components/footer/footer/footer.component';
import { MainControlComponent } from './Components/main-control/main-control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    CustomPipePipe,
    NavcomponentComponent,
    FooterComponent,
    MainControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
