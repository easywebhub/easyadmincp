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
import * as $ from 'jquery'
@inject(DialogController, ValidationControllerFactory)

export class CreateWebDlg {
  dialogController: DialogController;
  Web: WebSite;
  controller
  constructor(dialogController, controllerFactory) {
   
    this.dialogController = dialogController

    this.Web.Accounts.AccountId = (Lockr.get("UserInfo") as any).AccountId;

    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
    this.Web = new WebSite({})
   
  }

  submit() {
    this.controller.validate().then(rs => {
      if (rs.valid == true)

      {
      // this.Web.Accounts[0].AccountId = (Lockr.get("UserInfo") as any).AccountId;
        //this.Web.Accounts.push({'AccountId':(Lockr.get("UserInfo") as any).AccountId})
        console.log('web', JSON.stringify(new WebSite(this.Web)))
      //  this.dialogController.ok(this.Web);
      } else
        console.log('error')

    });
    // console.log('web',this.Web.Accounts.WebsiteDisplayName,this.Web.Accounts.AccessLevels,this.Web.Accounts.AccountId)

  }




}
