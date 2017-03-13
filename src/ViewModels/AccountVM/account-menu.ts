export class AccountMenu {
    router: any;
    pending:boolean=false;
    configureRouter(config, router) {
        config.map([
             { route: '', name: 'account-list', moduleId: '../../ViewModels/AccountVM/account-list', nav: true, settings: { roles: [] }, title: 'Account Management'},
             { route: ':id', moduleId: '../../ViewModels/AccountVM/account',nav: false, title: 'Account' }
            

        ]);
        this.router = router;
        
       
    }
    activate(){
         setTimeout(()=> {
             this.pending=true;
         }, 2000);
    }
}