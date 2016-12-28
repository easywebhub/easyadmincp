import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-dependency-injection';
import { WebSiteServices } from '../../services/WebSite/WebSiteServices';
@inject(DialogController,WebSiteServices)
export class DetailWebDlg {
    dialogController: DialogController;
    Web: any;
    Account: any;
    webSiteServices:WebSiteServices
    constructor(dialogController,webSiteServices) {
        this.dialogController = dialogController
        this.Web = []
        this.Account = []
        this.webSiteServices=webSiteServices
    }
    activate(params) {
       
        this.webSiteServices.DetailWebSite(params.WebsiteId).then(rs=>{
             this.Web=rs;
             //console.log('params',JSON.stringify(this.Web));
        })
        
    }


}