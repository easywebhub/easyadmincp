import {
  DialogController
} from 'aurelia-dialog';

import {
  inject
} from 'aurelia-dependency-injection';

import {
  ValidationControllerFactory,
  ValidationRules

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';

import {
  Accounts
} from '../../../models/model-web';
import {
  AccessLevels
} from '../../../resources/helpers/enum';
import {
  UserServices
} from '../../../services/Account/UserServices';
import * as _
from 'lodash';
import * as $
from 'jquery';

@inject(DialogController, ValidationControllerFactory, UserServices)

export class CUAccountDlg {
  dialogController: DialogController;
  item: Accounts;
  controller: any;
  accessLevels: any;
  listAccount: any;
  userSR: UserServices;

  constructor(dialogController, controllerFactory, userServices) {
    this.dialogController = dialogController;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
    this.userSR = userServices;
  }
  async activate(params) {

    this.accessLevels = AccessLevels;
    await this.userSR.GetListByUsers().then(rs => {
      this.listAccount = (rs as any).data;
      this.listAccount.push({
        'AccountId': '0',
        'UserName': '--Select Account--',
        'AccountType': 'a'
      });
      this.item = params;
      this.listAccount = _.sortBy(this.listAccount, [function (o) {
        return o.AccountId;
      }]);
      //console.log('(rs as any).data',JSON.stringify(this.listAccount));
    })

  }

  submit() {
    //  console.log('valid',this.controller)
    this.controller.validate().then(rs => {
      // console.log('rs cu',rs)
      if (rs.valid == true) {
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
    if (this.item.AccountId != "0") {
      return `Account #${this.item.AccountId}`;

    } else
      return 'NEW';


  }

}
