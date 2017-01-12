import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
import { WebSiteServices } from '../../../services/WebSite/WebSiteServices';
@inject(DialogController,WebSiteServices)
export class DetailWebUsersDlg {
    dialogController: DialogController;
    listUsers: any;
       webSiteServices:WebSiteServices
      pendding:boolean=true
    constructor(dialogController,webSiteServices) {
        this.dialogController = dialogController
        this.listUsers = []
    
        this.webSiteServices=webSiteServices
    }
    async activate(params) {
       this.pendding=!this.pendding
       await this.webSiteServices.DetailWebSiteUsers(params.WebsiteId).then(rs=>{
           this.pendding=!this.pendding
        this.listUsers=(rs as any).data;
       // console.log('data',JSON.stringify((rs as any).data))
           
        })
        
    }


}