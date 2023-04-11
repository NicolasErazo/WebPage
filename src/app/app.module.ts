import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { IndexOldComponent } from './components/index-old/index-old.component';
import { JumpingLettersComponent } from './components/jumping-letters/jumping-letters.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexOldComponent,
    JumpingLettersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
