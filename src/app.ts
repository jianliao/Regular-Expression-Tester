import {bootstrap} from 'angular2/platform/browser';

import {Main} from './app/main';

bootstrap(Main)
  .catch(err => console.error(err));