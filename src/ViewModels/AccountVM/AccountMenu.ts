export class AccountMenu {
    router: any;
    configureRouter(config, router) {
        config.map([
             { route: ['', 'UserMng'], name: 'UserMng', moduleId: '../../ViewModels/AccountVM/UserMng', nav: true, settings: { roles: [] }, title: 'Account Management'},
             { route: 'WebsOfAccount/:AccountId', name: 'WebsOfAccount', moduleId: '../../ViewModels/AccountVM/WebsOfAccount', nav: false, title: 'Website Of Account' }
           
        ]);
        this.router = router;
        
       
    }
}