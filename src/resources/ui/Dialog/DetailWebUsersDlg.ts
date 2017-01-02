import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
import { WebSiteServices } from '../../../services/WebSite/WebSiteServices';
@inject(DialogController,WebSiteServices)
export class DetailWebUsersDlg {
    dialogController: DialogController;
    listUsers: any;
       webSiteServices:WebSiteServices
    constructor(dialogController,webSiteServices) {
        this.dialogController = dialogController
        this.listUsers = []
    
        this.webSiteServices=webSiteServices
    }
    activate(params) {
       
        this.webSiteServices.DetailWebSiteUsers(params.WebsiteId).then(rs=>{
        this.listUsers=(rs as any).data;
        console.log('data',JSON.stringify((rs as any).data))
           
        })
        
    }


}