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
  CUStaggingDlg
} from '../../../resources/ui/Dialog/cu-stagging-Dlg';
import {
  Stagging
} from '../../../models/model-web';

@inject(UserServices, DialogService)

export class StaggingList {

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
    if (params.Stagging) {
        
         this.entities.Stagging=this.entities.Stagging.map(x=>{
            return new Stagging(x)
         })
         
      }
    else
     {
       // console.log('@@@',params)
        this.entities =params
        this.entities.Stagging=[];
     }
    
  }

  addStagging(item){

    this.dialogService.open({
      viewModel:CUStaggingDlg,
      model:new Stagging({})
    }).then((result) => {
      if (!result.wasCancelled) {
        
         this.entities.Stagging.push(result.output);
        
      } else {
        console.log('bad');
      }

    });

  }
  editStagging(item) {
 
    this.dialogService.open({
      viewModel: CUStaggingDlg,
      model:item
    }).then((result) => {
      if (!result.wasCancelled) {
      }
    });
  }

  removeStagging(item) {
  
    this.entities.Stagging.splice(this.entities.Stagging.indexOf(item), 1);
 
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
