import {
  DialogController
} from 'aurelia-dialog';

import {
  inject
} from 'aurelia-dependency-injection';

import {
  ValidationControllerFactory,ValidationRules

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';

import {
  Accounts
} from '../../../models/model-web';
import {
  AccessLevels
} from '../../../resources/helpers/enum';
@inject(DialogController,ValidationControllerFactory)

export class CUAccountDlg {
  dialogController: DialogController;
  item :Accounts;
  controller: any;
  accessLevels:any
  constructor(dialogController,controllerFactory) {
    this.dialogController = dialogController;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
  
  }
  activate(params) {
      console.log("para",params);
      this.item =params;
      this.accessLevels=AccessLevels;   
   }

  submit() {
    console.log('valid',this.controller)
    this.controller.validate().then(rs => {
     // console.log('rs cu',rs)
      if (rs.valid == true)
      {
        console.log(this.item)
        this.item.AccessLevels=[this.item.AccessLevels]||[];
        this.dialogController.ok(this.item);
      } else
        console.log('error')

    });
  }
   get title() {
    if (this.item.AccountId=="0") {
        return 'NEW';
      
    }
    else
     return `Account #${this.item.AccountId}`;
     
    
  }
  
}
