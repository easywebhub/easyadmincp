import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
@inject(DialogController)
export class DetailWebDlg {
    dialogController: DialogController;
    Web: any;
    Account: any;
    constructor(dialogController) {
        this.dialogController = dialogController
        this.Web = []
        this.Account = []
    }
    activate(params) {
        this.Web = params;
        console.log('params', JSON.stringify(params));
    }


}