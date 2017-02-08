import {
  DialogController
} from 'aurelia-dialog';

import {
  inject
} from 'aurelia-dependency-injection';
import {
  WebSite,
  Accounts
} from '../../../models//website';
import {
  ValidationControllerFactory

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';

import {
  ModelWeb
} from '../../../models/user';
@inject(DialogController, ValidationControllerFactory)

export class CUAccountWebsiteDlg {
  dialogController: DialogController;
  entity: ModelWeb;
  controller: any;

  constructor(dialogController, controllerFactory) {

    this.dialogController = dialogController

    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());



  }
  activate(params) {
      this.entity = new ModelWeb(params);
   }
  submit() {
    this.controller.validate().then(rs => {
      if (rs.valid == true)
      {
        this.dialogController.ok(this.entity);
      } else
        console.log('error')

    });
  }
}
