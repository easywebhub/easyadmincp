export class AccountMenu {
    router: any;
    configureRouter(config, router) {
        config.map([
            { route: ['', 'GitMng'], name: 'GitMng', moduleId: '../../ViewModels/GitVM/GitMng', nav: true, settings: { roles: [] }, title: ' Github Management' }
           
        ]);
        this.router = router;
    }
}