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
        await this.webSiteServices.DetailWebSite(params.WebsiteId).then(rs=>{
            this.Web=(rs as any).data;
            console.log('this.Web',JSON.stringify(this.Web))
           
        }).catch(err=>{
             swal("Notification", `Error Detail Website`, "warning");
        })
        
    }
   clickProduct()
    {
       ($('.product') as any).modal('show');  
    }
     clickStagging()
    {
       ($('.stagging') as any).modal('show');  
    }
     clickAccounts()
    {
       ($('.accounts') as any).modal('show');  
    }
   
   

}