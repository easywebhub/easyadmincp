import {
  inject
} from 'aurelia-dependency-injection';
import {
  UserServices
} from '../../../services/Account/UserServices';
import {
  DialogService
} from 'aurelia-dialog';
import {
  CUAccountWebsiteDlg
} from '../../../resources/ui/Dialog/cu-account-website-Dlg';
import {
  ModelWeb
} from '../../../models/user';

@inject(UserServices, DialogService)

export class AccountWebsites {

  entities: any;
  clssServices: UserServices;
  dialogService: DialogService;

  constructor(UserServices, dialogService) {

    this.clssServices = UserServices;
    this.dialogService = dialogService;
  
}

  activate(params) {
   
    if (params.Websites) {
     
      this.entities = params.Websites
   
   } else
    
      this.entities = []
  }

  addWebsite() {

    this.dialogService.open({
      viewModel: CUAccountWebsiteDlg
    }).then((result) => {
      if (!result.wasCancelled) {
        this.entities.push(result.output)
      } else {
        console.log('bad');
      }

    });

  }
  editWebsite(item) {
    let obj;
    this.dialogService.open({
      viewModel: CUAccountWebsiteDlg,
      model: item
    }).then((result) => {
      if (!result.wasCancelled) {
        //console.log('@@@',result.output)
        this.entities = this.entities.map(x => {
          if (result.output.WebsiteId && x.WebsiteId == result.output.WebsiteId) {
            return result.output;
          } else
            return x;

        });


      } else {
        console.log('bad');
      }

    });
  }

  removeWebsite(item) {
  
    this.entities.splice(this.entities.indexOf(item), 1);
 
 }

}


export class DiscountValueConverter {
  toView(value) {
    return value === null ? null : Math.floor(value * 100);
  }

  fromView(value) {
    value = +value;

    if (isNaN(value) || value >= 100) {
      return 0;
    }

    return (value / 100).toFixed(2);
  }
}
