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
  ModelWeb
} from '../../../models/user';
@inject(DialogController,ValidationControllerFactory)

export class CUAccountWebsiteDlg {
  dialogController: DialogController;
  item :ModelWeb;
  controller: any;
  constructor(dialogController,controllerFactory) {
    this.dialogController = dialogController;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
  
  }
  activate(params) {
      console.log("11111",JSON.stringify(params));
      this.item =params;
      
   }
  submit() {
    console.log('valid',this.controller)
    this.controller.validate().then(rs => {
      console.log('rs cu',rs)
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
    if (!this.item.WebsiteId) {
        return 'NEW';
      
    }
    else
     return `Update`;
     
    
  }
  
}
