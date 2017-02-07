import {
  DialogController
} from 'aurelia-dialog';

import {
  inject
} from 'aurelia-dependency-injection';
import {
  WebSite,Accounts
} from '../../../models//website';
import {
  ValidationControllerFactory

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';
import * as Lockr from 'lockr'

@inject(DialogController, ValidationControllerFactory)

export class CreateWebDlg {
  dialogController: DialogController;
  Web: WebSite;
  controller
  Accounts:any={}
  constructor(dialogController, controllerFactory) {
   
    this.dialogController = dialogController

    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
    this.Web = new WebSite({})

   
  }

  submit() {
    this.controller.validate().then(rs => {
      if (rs.valid == true)

      {
        this.Accounts.AccountId = (Lockr.get("UserInfo") as any).AccountId;
        this.Accounts.AccessLevels=["owner"]
       
        this.Web.Accounts=[this.Accounts];
      
      // console.log('web',JSON.stringify(new WebSite(this.Web)))
      this.dialogController.ok(this.Web);
      } else
        console.log('error')

    });
   

  }




}