"use strict";
require('zone.js');
require('bootstrap');
require('reflect-metadata');
require('./styles/site.css');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=boot-client.js.map