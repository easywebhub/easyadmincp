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
  ModelWeb,
  User
} from '../../../models/user';
import * as _
from 'lodash';
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
    //console.log('params',params)
    this.entities = params;
    if (params.Websites) {

      this.entities.Websites = this.entities.Websites.map(x => {
        return new ModelWeb(x)
      })
    } else {
      // console.log('@@@',params)
      this.entities = params
      this.entities.Websites = [];
    }


  }

  addWebsite(item) {

    this.dialogService.open({
      viewModel: CUAccountWebsiteDlg,
      model: new ModelWeb(item)
    }).then((result) => {
      if (!result.wasCancelled) {
       
        let searchWebId=_.find(this.entities.Websites,(o)=> { return (o as any).WebsiteId== result.output.WebsiteId; })
    if(_.isEmpty(searchWebId)==false){
        let tmp = _.map(this.entities.Websites, (x) => {
          if ((x as any).WebsiteId == result.output.WebsiteId) {
            (x as any).AccessLevels = _.union((x as any).AccessLevels, result.output.AccessLevels);
            return x;
          } else
            return x;
        });
        this.entities.Websites=tmp;
      //  console.log('tmp',tmp);
    }
    else{
      
        this.entities.Websites.push(result.output);
        //console.log('result',this.entities.Websites);
    }
      } else {
        console.log('bad');
      }

    });

  }
  editWebsite(item) {

    this.dialogService.open({
      viewModel: CUAccountWebsiteDlg,
      model: item
    }).then((result) => {
      if (!result.wasCancelled) {}
    });
  }

  removeWebsite(item) {

    this.entities.Websites.splice(this.entities.Websites.indexOf(item), 1);

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
