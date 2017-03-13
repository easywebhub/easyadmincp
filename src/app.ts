import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

import * as Lockr from 'lockr';
import * as $ from 'jquery'

export class App {
  router: Router;
  checkNav:any
   constructor(appState, private history: History) {
    this.checkNav = false;
  }
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'AdminCp';
    
    if ((Lockr.get('UserInfo')as any)) {
      this.checkNav = true;
    }
    config.map([
       { route: ['', 'login'], name: 'login', moduleId: 'ViewModels/LoginVM/login', nav: false, settings: { roles: [] }, title: 'Login' },
      { route: 'resgister', name: 'resgister',moduleId:'ViewModels/LoginVM/register',nav:false, title: 'Register' },
      { route: 'websites', name: 'websites', moduleId: 'ViewModels/WebSiteVM/WebsiteMenu', nav:true, title: 'Website Management' },
       { route: 'accounts', name: 'accounts', moduleId: 'ViewModels/AccountVM/account-menu', nav:true, title: 'Account Management' },
        { route: 'logout', name: 'logout', moduleId: 'ViewModels/LoginVM/logout', nav: false, settings: { roles: [] }, title: 'LogOut' },
    ]);

    this.router = router;
  }
  
}
