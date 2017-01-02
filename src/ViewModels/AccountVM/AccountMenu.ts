export class AccountMenu {
    router: any;
    configureRouter(config, router) {
        config.map([
            { route: ['', 'UserMng'], name: 'UserMng', moduleId: '../../ViewModels/AccountVM/UserMng', nav: true, settings: { roles: [] }, title: 'Quản lý User' }
           
        ]);
        this.router = router;
    }
}