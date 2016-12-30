import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
@inject(DialogController)
export class RoleWebDlg {
    dialogController: DialogController;
    roleData: any;
    objRole: any;
    objAccessLevel: any;
  
    constructor(dialogController) {
        this.dialogController = dialogController;
        this.objRole = {};
       
        this.objAccessLevel = [];
       
    }
    activate(params) {
        this.roleData = params;
        console.log('params',JSON.stringify(params));
    }
    submit() {
        this.objRole.AccessLevel = []
        this.objRole.AccountId = (Lockr.get("UserInfo") as any).Data.AccountId;
        this.objRole.WebsiteId = this.roleData.Id;
        this.objRole.WebsiteDisplayName = this.roleData.DisplayName;

         this.objRole.AccessLevel= this.objAccessLevel
          console.log('value change',this.objRole.AccessLevel);
       
      
        this.dialogController.ok(this.objRole);
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
         
        
      ($('.dropdown') as any)
  .dropdown({
  
      onChange: function (value, text, $selectedItem) {
        
          this.objAccessLevel = value;  
          
        console.log('value change',this.objAccessLevel);
    }
  })
;
    }


}