import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
import { WebSiteServices } from '../../../services/WebSite/WebSiteServices';
@inject(DialogController,WebSiteServices)
export class DetailWebDlg {
    dialogController: DialogController;
    Web: any;
    Account: any;
    webSiteServices:WebSiteServices
    pendding:boolean=true
    constructor(dialogController,webSiteServices) {
        this.dialogController = dialogController
        this.Web = []
        this.Account = []
        this.webSiteServices=webSiteServices
    }
    async activate(params) {
        this.pendding = !this.pendding;
        await this.webSiteServices.DetailWebSite(params.WebsiteId).then(rs=>{
             this.pendding = !this.pendding;
        this.Web=(rs as any).data;
           
        })
        
    }


}