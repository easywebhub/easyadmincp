import { inject, LogManager, bindable } from 'aurelia-framework';
import { AppState } from './services/appState';
import { AuthorizeStep } from './configs/authorizeStep';
import { HttpClient } from 'aurelia-fetch-client';
import { History } from 'aurelia-history';
@inject(AppState, History)
export class App {
  logger: any;
  router: any;
 checkNav:boolean
 @bindable appState;
  config:any
  constructor(appState, private history: History) {
       this.checkNav = false;
  }
  configureRouter(config, router) {
    config.title = ' ADMINCP';
    config.addPipelineStep('authorize', AuthorizeStep);
   
    console.log('this.checkNav',this.checkNav);
    if (Lockr.get('UserInfo'))
    {
      this.checkNav = (Lockr.get('UserInfo') as any).Result;
    }  
  
    config.map([
      { route: 'Dashboard', name: 'Dashboard', moduleId: 'viewmodels/DashBoardVM/dash_board', nav: this.checkNav, title: 'DASHBOARB' },
      { route: ['','login'], name: 'login', moduleId: 'viewmodels/LoginVM/login', nav:true, settings: { roles: [] }, title: 'Đăng nhập' },
      { route: 'WebSiteMenu', name: 'WebSiteMenu', moduleId: 'viewmodels/WebSiteVM/WebSiteMenu', nav:this.checkNav, title: 'QL WEBSITE' },
      { route: 'AccountMenu', name: 'AccountMenu', moduleId: 'viewmodels/AccountVM/AccountMenu', nav:this.checkNav, title: 'QL USER' },
      { route: 'logout', name: 'logout', moduleId: 'viewmodels/LoginVM/logout', nav: false, title: 'Logout' },
        { route: 'register', name: 'register', moduleId: 'viewmodels/LoginVM/resgister', nav: false, title: 'register'}
    ]);
     
    this.router = router;
   
  
  }
  


}
