import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
@inject(DialogController)
export class CreateWebDlg {
    dialogController: DialogController;
    Web: any;
    Account: any;
    constructor(dialogController) {
        this.dialogController = dialogController
        this.Web = []
        this.Account = []
    }
    submit() {
        this.Web.Accounts = [];
        this.Account.AccountId = (Lockr.get("UserInfo") as any).Data.AccountId;
        this.Account.AccessLevel = [];
        this.Web.Accounts = this.Account;
        console.log('dialog', this.Web);
        this.dialogController.ok(this.Web);
    }
    attached() {
        var rules = {
            Name: {
                identifier: 'Name',
                rules: [{
                    type: 'empty',
                    prompt: 'Xin vui lòng nhập tên vào'
                }]
            },
            PasswoDisplayName: {
                identifier: 'DisplayName',
                rules: [{
                    type: 'empty',
                    prompt: 'Xin vui lòng nhập DisplayName'
                }]
            },
            Link: {
                identifier: 'Link',
                rules: [{
                    type: 'empty',
                    prompt: 'Xin vui lòng nhập Link'
                }]
            }
            

        };
        ($(".ui.form") as any).form(rules, {
            inline: true,
            on: 'blur'
        });
    }



}