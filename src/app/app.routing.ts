import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.components';
import {AboutComponent} from './components/about.components';
/*Routes is for routing*/
const appRotues: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const Routing:  ModuleWithProviders = RouterModule.forRoot(appRotues);
