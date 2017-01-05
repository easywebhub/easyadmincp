import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
import { UserServices } from '../../../services/Account/UserServices';
@inject(DialogController,UserServices)
export class DetailUserDlg  {
    dialogController: DialogController;
    user: any;
       userServices:UserServices
    constructor(dialogController,UserServices) {
        this.dialogController = dialogController
        this.user = []
    
        this.userServices=UserServices
    }
    activate(params) {
       console.log('params',params)
        this.userServices.DetaiByUser(params.AccountId).then(rs=>{
        this.user=(rs as any).data;
        console.log('data',JSON.stringify((rs as any).data))
           
        })
        
    }


}