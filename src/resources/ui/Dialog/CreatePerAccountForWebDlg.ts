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
  Accounts
} from '../../../models//website';
import * as $ from 'jquery'

@inject(DialogController, ValidationControllerFactory)
export class CreatePerAccountForWebDlg {
  dialogController: DialogController;
 
   meta: Accounts;
  controller: any
   
  constructor(dialogController, controllerFactory) {
    this.dialogController = dialogController
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
   
  }
 async activate(params) {
    
    this.meta = new Accounts(params)
    console.log('this.meta',this.meta)
  }

  submit() {
   console.log('valid',this.meta)
  //  this.controller.validate().then(rs => {
  //      if(rs.valid==true)

  //       {
  //          this.meta.Info.Name=(this.meta as any).Name;
  //         // console.log('meta', JSON.stringify(this.meta))
  //          this.dialogController.ok(this.meta);
  //       }
  //       else
  //        console.log('error')

  //   });
   
  }



}
