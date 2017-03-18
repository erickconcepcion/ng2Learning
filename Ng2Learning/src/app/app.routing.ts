import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { MyComponentComponent } from './MyComponent/MyComponent.component';
import { PersonDataComponent } from './PersonData/PersonData.component';
import { PersonDetailsComponent } from './PersonDetails/PersonDetails.component';
import { PersonOperationsComponent } from './PersonOperations/PersonOperations.component';
import { AddPersonComponent } from './AddPerson/AddPerson.component';
import {NotFoundComponent} from './NotFound/NotFound.component';

export const routes: Routes = [
  {
    path: 'app',
    component: PersonDataComponent
  },
  {  
    path: 'sayhello',
    component: SayHelloComponent
  },
  {
    path: 'persondata',
    component: PersonDataComponent
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

//export const AppRoutes = RouterModule.forChild(routes);
