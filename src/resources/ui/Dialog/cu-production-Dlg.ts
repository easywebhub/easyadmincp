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
  Production
} from '../../../models/model-web';
import {
  HostingFees
} from '../../../resources/helpers/enum';
@inject(DialogController,ValidationControllerFactory)

export class CUProductionDlg {
  dialogController: DialogController;
  item :Production;
  controller: any;
  hostings:any;
  constructor(dialogController,controllerFactory) {
    this.dialogController = dialogController;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
  
  }
  activate(params) {
      console.log("para",params);
      this.item =params;
      this.hostings=HostingFees;
      //console.log('HostingFees',HostingFees)
   }
  submit() {
    console.log('valid',this.controller)
    this.controller.validate().then(rs => {
      console.log('rs cu',rs)
      if (rs.valid == true)
      {
        console.log(this.item)
        this.dialogController.ok(this.item);
      } else
        console.log('error')

    });
  }
   get title() {
    if (this.item.Id=="0") {
        return 'NEW';
      
    }
    else
     return `Production #${this.item.Id}`;
     
    
  }
  
}
