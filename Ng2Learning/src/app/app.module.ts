import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Services
import {PersonDataService} from './PersonData/PersonData.service'

// Child Routes
import { routes } from './app.routing'

// Components
import { AppComponent } from './app.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { MyComponentComponent } from './MyComponent/MyComponent.component';
import { PersonDataComponent } from './PersonData/PersonData.component';
import { PersonDetailsComponent } from './PersonDetails/PersonDetails.component';
import { PersonOperationsComponent } from './PersonOperations/PersonOperations.component';
import { AddPersonComponent } from './AddPerson/AddPerson.component';
import {NotFoundComponent} from './NotFound/NotFound.component';




@NgModule({
  declarations: [
    AppComponent,
    SayHelloComponent,
    MyComponentComponent,
    PersonDataComponent,
    PersonDetailsComponent,
    PersonOperationsComponent,
    AddPersonComponent,
    NotFoundComponent
],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [PersonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
