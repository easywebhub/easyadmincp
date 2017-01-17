import {
  DialogController
} from 'aurelia-dialog';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules
} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';
import {
  Accounts,PermissionAccountForWeb
} from '../../../models//website';


@inject(DialogController, ValidationControllerFactory)
export class UpdatePerAccountForWebDlg {
  dialogController: DialogController;
 
   meta: PermissionAccountForWeb;
  controller: any
   
  constructor(dialogController, controllerFactory) {
    this.dialogController = dialogController
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
   
  }
 async activate(params) {
    
    this.meta = new PermissionAccountForWeb(params)
  // console.log('this.meta',JSON.stringify(this.meta))
  }

  submit() {
   
   this.controller.validate().then(rs => {
       if(rs.valid==true)
        {
          this.meta.AccessLevels=[this.meta.AccessLevels]
         // console.log('input meta',JSON.stringify(this.meta))
           this.dialogController.ok(this.meta);
        }
        else
         console.log('error')

    });
   
  }



}
