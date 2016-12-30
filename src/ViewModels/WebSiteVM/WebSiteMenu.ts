export class AccountMenu {
    router: any;
    configureRouter(config, router) {
        config.map([
            { route: ['', 'WebSiteMng'], name: 'WebSiteMng', moduleId: '../../ViewModels/WebSiteVM/WebSiteMng', nav: true, settings: { roles: [] }, title: 'Quản lý WebSite' }
           
        ]);
        this.router = router;
    }
}