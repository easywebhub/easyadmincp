export class WebsiteMenu {
    router: any;
    configureRouter(config, router) {
        config.map([
             { route: '', name: 'website-list', moduleId: '../../ViewModels/WebSiteVM/website-list', nav: true, settings: { roles: [] }, title: 'Website Management'},
             { route: ':id', moduleId: '../../ViewModels/WebSiteVM/website',nav: false, title: 'Website' }
            

        ]);
        this.router = router;
        
       
    }
}