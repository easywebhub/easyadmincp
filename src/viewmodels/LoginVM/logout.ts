import { inject } from 'aurelia-framework'
import { Router } from 'aurelia-router';

@inject(Router)

export class LogOut {
  theRouter: Router;

  constructor(router: Router) {
    this.theRouter = router;
  }

  activate() {
   
    Lockr.rm('UserInfo');
    window.setTimeout(() => {
          this.theRouter.navigateToRoute('login');
          location.reload();
        
    }, 1200);
    return;
  }
   reset() {
    this.activate();
  }
}
