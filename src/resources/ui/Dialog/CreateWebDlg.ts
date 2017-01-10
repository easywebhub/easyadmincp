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
  Accounts:any
  constructor(dialogController, controllerFactory) {
   
    this.dialogController = dialogController

<<<<<<< HEAD
    this.Web.Accounts.AccountId = (Lockr.get("UserInfo") as any).AccountId;
=======
 
 
>>>>>>> 44c27c3c6e65a511c3e088505fd780d8e4145ecb

    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
    this.Web = new WebSite({})
<<<<<<< HEAD
=======
  
>>>>>>> 44c27c3c6e65a511c3e088505fd780d8e4145ecb
   
  }

  submit() {
    this.controller.validate().then(rs => {
      if (rs.valid == true)

      {
        this.Accounts.AccountId = (Lockr.get("UserInfo") as any).AccountId;
        let Acc=new Accounts(this.Accounts)
        let Arr:any=[]
        Arr[0]=Acc
       this.Web.Accounts=Arr;
      
      // console.log('web',JSON.stringify(this.Web),Acc)
       this.dialogController.ok(this.Web);
      } else
        console.log('error')

    });
   

  }




}
