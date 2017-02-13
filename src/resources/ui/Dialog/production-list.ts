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
  CUProductionDlg
} from '../../../resources/ui/Dialog/cu-production-Dlg';
import {
  ModelWeb,Accounts,Production
} from '../../../models/model-web';

@inject(UserServices, DialogService)

export class ProductionList {

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
    if (params.Production) {
        
         this.entities.Production=this.entities.Production.map(x=>{
            return new Production(x)
         })
         
      }
    else
     {
       // console.log('@@@',params)
        this.entities =params
        this.entities.Production=[];
     }
    
  }

  addAccount(item) {

    this.dialogService.open({
      viewModel:CUProductionDlg,
      model:new Production({})
    }).then((result) => {
      if (!result.wasCancelled) {
        //result.output.AccessLevels=[result.output.AccessLevels]
         this.entities.Production.push(result.output);
        
      } else {
        console.log('bad');
      }

    });

  }
  editAccount(item) {
 
    this.dialogService.open({
      viewModel: CUProductionDlg,
      model:item
    }).then((result) => {
      if (!result.wasCancelled) {
      }
    });
  }

  removeAccount(item) {
  
    this.entities.Production.splice(this.entities.Production.indexOf(item), 1);
 
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
