import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RtdbService} from './rtdb/rtdb.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore( counterReducer ),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [RtdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
