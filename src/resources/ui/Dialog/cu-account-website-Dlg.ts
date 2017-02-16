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
import {
  AccessLevels,WebsiteTypes
} from '../../../resources/helpers/enum';
import * as $
from 'jquery';
@inject(DialogController,ValidationControllerFactory)

export class CUAccountWebsiteDlg {
  dialogController: DialogController;
  item :ModelWeb;
  controller: any;
  accessLevels=AccessLevels;
  websiteTypes=WebsiteTypes;
  constructor(dialogController,controllerFactory) {
    this.dialogController = dialogController;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
  
  }
  activate(params) {
    //  console.log("11111",JSON.stringify(params));
      this.item =params;
      
   }
  submit() {
    console.log('valid',this.controller)
    this.controller.validate().then(rs => {
    
      if (rs.valid == true)
      {
         if ($.isArray(this.item.AccessLevels)) {
             this.dialogController.ok(this.item);
        } else {
          //console.log('@@@@@@@',JSON.stringify(this.item.AccessLevels))
          let tmp = this.item.AccessLevels.split(",");
          this.item.AccessLevels = this.item.AccessLevels ? tmp : [];
           this.dialogController.ok(this.item);
        }
       
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
