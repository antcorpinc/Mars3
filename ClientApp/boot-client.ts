require('zone.js');
import 'bootstrap';
import 'reflect-metadata';
import './styles/site.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
