export class AccountMenu {
    router: any;
    configureRouter(config, router) {
        config.map([
            { route: ['', 'UserMng'], name: 'UserMng', moduleId: '../../viewmodels/AccountVM/UserMng', nav: true, settings: { roles: [] }, title: 'Quản lý User' }
            // { route: 'UserHistory/:userId', name: 'UserHistory', moduleId: '../../viewmodels/AccountVM/UserHistory', nav: false, settings: { roles: [] }, title: 'Lịch sử người dùng' },
            // { route: 'Student', name: 'Student', moduleId: '../../viewmodels/AccountVM/Student', nav: true, settings: { roles: [] }, title: 'Quản lý sinh viên' },
            // { route: 'Logging', name: 'Logging', moduleId: '../../viewmodels/AccountVM/Logging', nav: true, settings: { roles: [] }, title: 'Quản lý Logging' },
            // { route: 'CustomerVTA', name: 'CustomerVTA', moduleId: '../../viewmodels/AccountVM/CustomerVTA', nav: true, settings: { roles: [] }, title: 'Quản lý Customer VTA' }
        ]);
        this.router = router;
    }
}