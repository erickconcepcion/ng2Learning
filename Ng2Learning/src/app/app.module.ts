import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { MyComponentComponent } from './MyComponent/MyComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    SayHelloComponent,
    MyComponentComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
