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
  CUAccountDlg
} from '../../../resources/ui/Dialog/cu-account-Dlg';
import {
  ModelWeb,Accounts
} from '../../../models/model-web';
import * as _
from 'lodash';
@inject(UserServices, DialogService)

export class AccountList {

  entities: any;
  clssServices: UserServices;
  dialogService: DialogService;
  item:any;
  count=0;
  disableButton:boolean=false;
  constructor(UserServices, dialogService) {

    this.clssServices = UserServices;
    this.dialogService = dialogService;
  
}

   activate(params) {
    //console.log('params',params)
    
     this.entities = params;
    if (params.Accounts) {
        
         this.entities.Accounts=this.entities.Accounts.map(x=>{
            return new Accounts(x)
         })
         
      }
    else
     {
       // console.log('@@@',params)
        this.entities =params
        this.entities.Accounts=[];
     }
    
  }
  
  addAccount(item) {
      
      
         this.disableButton=true;    
       this.dialogService.open({
      viewModel: CUAccountDlg,
      model:new Accounts({})
    }).then((result) => {
       this.disableButton=false;  
      if (!result.wasCancelled) {
       // this.disableButton=false;
        //result.output.AccessLevels=[result.output.AccessLevels]
         let searchWebId=_.find(this.entities.Accounts,(o)=> { return (o as any).AccountId== result.output.AccountId; })
    if(_.isEmpty(searchWebId)==false){
        let tmp = _.map(this.entities.Accounts, (x) => {
          if ((x as any).AccountId == result.output.AccountId) {
            (x as any).AccessLevels = _.union((x as any).AccessLevels, result.output.AccessLevels);
            return x;
          } else
            return x;
        });
        this.entities.Accounts=tmp;
      //  console.log('tmp',tmp);
     
  }
    else{
      
       this.entities.Accounts.push(result.output);
        //console.log('result',this.entities.Websites);
    }
        
        
      } else {
        console.log('bad');
      }

    });
      
  }
  editAccount(item) {
 
    this.dialogService.open({
      viewModel: CUAccountDlg,
      model:item
    }).then((result) => {
      if (!result.wasCancelled) {
      }
    });
  }

  removeAccount(item) {
  
    this.entities.Accounts.splice(this.entities.Accounts.indexOf(item), 1);
 
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
