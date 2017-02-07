export class AccountMenu {
    router: any;
    configureRouter(config, router) {
        config.map([
             { route: '', name: 'account-list', moduleId: '../../ViewModels/AccountVM/account-list', nav: true, settings: { roles: [] }, title: 'Account Management'},
             { route: 'WebsOfAccount/:AccountId', name: 'WebsOfAccount', moduleId: '../../ViewModels/AccountVM/WebsOfAccount', nav: false, title: 'Website Of Account' },
             { route: ':id', moduleId: '../../ViewModels/AccountVM/account',nav: false, title: 'Account' }
        ]);
        this.router = router;
        
       
    }
}