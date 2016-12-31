import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  checkNav:any
   constructor(appState, private history: History) {
    this.checkNav = false;
  }
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'AdminCp';
    console.log('app',Lockr.get('UserInfo'))
    if ((Lockr.get('UserInfo')as any)) {
      this.checkNav = true;
    }
    config.map([
       { route: ['', 'login'], name: 'login', moduleId: 'ViewModels/LoginVM/login', nav: false, settings: { roles: [] }, title: 'Đăng nhập' },
      { route: 'welcome', name: 'welcome',moduleId: './welcome',nav: this.checkNav, title: 'Welcome' },
      // { route: 'users',         name: 'users',        moduleId: './users',        nav: this.checkNav, title: 'Github Users' },
      // { route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: this.checkNav, title: 'Child Router' },
      // { route: 'demo',  name: 'demo', moduleId: './ViewDemo/demo', nav: true, title: 'Demo Semantic UI' },
      { route: 'WebSiteMenu', name: 'WebSiteMenu', moduleId: 'ViewModels/WebSiteVM/WebSiteMenu', nav:this.checkNav, title: 'Website Management' }
    ]);

    this.router = router;
  }
}
