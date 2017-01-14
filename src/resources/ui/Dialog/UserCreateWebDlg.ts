import {
  DialogController
} from 'aurelia-dialog';

import {
  inject
} from 'aurelia-dependency-injection';
import {
  Web
} from '../../../models//user';
import {
  ValidationControllerFactory

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';
import * as Lockr from 'lockr'

@inject(DialogController, ValidationControllerFactory)

export class UserCreateWebDlg {
  dialogController: DialogController;
  Web: Web;
  controller
  constructor(dialogController, controllerFactory) {
   
    this.dialogController = dialogController

    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
   

   
  }
  activate(params){
   
   this.Web = new Web(params)
}
  submit() {
    this.controller.validate().then(rs => {
      if (rs.valid == true)

      {
      // console.log('web',JSON.stringify(this.Web))
       this.dialogController.ok(this.Web);
      } else
        console.log('error')

    });
   

  }




}
