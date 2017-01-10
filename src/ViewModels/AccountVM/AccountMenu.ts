export class AccountMenu {
    router: any;
    configureRouter(config, router) {
        config.map([
            { route: ['', 'UserMng'], name: 'UserMng', moduleId: '../../ViewModels/AccountVM/UserMng', nav: true, settings: { roles: [] }, title: 'Account Management' }
           
        ]);
        this.router = router;
    }
}