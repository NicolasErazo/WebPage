import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

import { JumpingLettersComponent } from './components/jumping-letters/jumping-letters.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { ScriptsService } from './services/scripts.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    JumpingLettersComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
