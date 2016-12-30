import {Aurelia} from 'aurelia-framework';
// we want font-awesome to load as soon as possible to show the fa-spinner
import 'jquery/dist/jquery.min.js';

import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-dt/css/jquery.dataTables.css';

import 'sweetalert/dist/sweetalert.css';
import 'sweetalert/dist/sweetalert.min.js';


import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/semantic.min.js';
import 'semantic-ui-calendar/dist/calendar.min.css';
import 'semantic-ui-calendar/dist/calendar.min.js';
//import 'axios/dist/axios.min.js';

import 'font-awesome/css/font-awesome.css';

import '../styles/styles.css';

import '../styles/inline.css';

import '../styles/app.css';
// import 'aurelia-dialog'



// comment out if you don't want a Promise polyfill (remove also from webpack.config.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources/ui')
    .developmentLogging()
     .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = false;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 10005;
    })
 
  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}
