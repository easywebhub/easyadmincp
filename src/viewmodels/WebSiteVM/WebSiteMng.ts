import { inject, BindingEngine } from 'aurelia-framework';
//import * as toastr from 'toastr';
import { WebSiteServices } from '../../services/WebSite/WebSiteServices';
import { DialogService } from 'aurelia-dialog';
import * as _ from 'lodash';
import { CreateWebDlg } from './CreateWebDlg';
import { DetailWebDlg } from './DetailWebDlg';

import { RoleWebDlg } from './RoleWebDlg';

import { CreateWeb,CreateRoleWeb } from '../../models//website';

@inject(WebSiteServices, BindingEngine,DialogService)
export class WebSiteMng {
    webSiteServices: WebSiteServices;
    listWebSite: any;
    //listSchool: any;
    total: number;

    itemperpage: number;
    current: number;
    pagesize: number;
    bindingEngine: BindingEngine;
     dialogService:DialogService
     pendding:boolean
    constructor(webSiteServices, bindingEngine,dialogService) {
        this.webSiteServices = webSiteServices;

        this.itemperpage = 10;
        this.pagesize = 6;
        this.current = 1;
        this.total=0
        this.dialogService=dialogService;
        this.pendding=true
    }
     activate() {
        this.pendding=!this.pendding;
        console.log('show',this.pendding)
       return Promise.all([this.webSiteServices.GetListWebSite()]).then(rs => {
          //  console.log('result',JSON.stringify(rs))
            if ((rs[0] as any).length >0) {
                 this.pendding=!this.pendding;
               // console.log('(rs[0] as any).Result',(rs[0] as any).Results)
                this.listWebSite = (rs[0] as any);
                this.total = (rs[0] as any).length;
                console.log('listWebSite',(rs[0] as any));
            }
            else
            {
                console.log('bad');
            }

        }

        );
    }
     detailRoleWeb(item)
    {
         this.dialogService.open({ viewModel: DetailWebDlg,model:item}).then((result) => {
             
            if (!result.wasCancelled) {
                console.log('result output',JSON.stringify(new CreateRoleWeb(result.output)));


                

            } else {
                console.log('bad');
            }

        });

    }
    roleWeb(item)
    {
         this.dialogService.open({ viewModel: RoleWebDlg,model:item}).then((result) => {
            if (!result.wasCancelled) {
                console.log('result output',JSON.stringify(new CreateRoleWeb(result.output)));


                this.webSiteServices.RoleWeb(new CreateRoleWeb(result.output)).then((rs: any) => {
                    console.log("rs",rs);
                   if (rs.Result == true) {

                        swal({ title: "Thông báo", text:rs.Message, timer: 2500, showConfirmButton: true, type: "success" });
                     
                        this.activate();
                    }
                    else {
                         swal({ title: "Thông báo",text:"Tạo mới role web thất bại" , timer: 2500, showConfirmButton: true,type: "warning" });
                    }
               });

            } else {
                console.log('bad');
            }

        });

    }
    createWeb() {

        this.dialogService.open({ viewModel: CreateWebDlg}).then((result) => {
            if (!result.wasCancelled) {
                console.log('result.output',result.output);


                this.webSiteServices.CreateWeb(new CreateWeb(result.output)).then((rs: any) => {
                   if (rs.status == 200) {

                        swal({ title: "Thông báo", text:rs.Message, timer: 2500, showConfirmButton: true, type: "success" });
                     
                        this.activate();
                    }
                    else {
                         swal({ title: "Thông báo",text:(rs as any).Message , timer: 2500, showConfirmButton: true,type: "warning" });
                    }
                });

            } else {
                console.log('bad');
            }

        });
    }



}
export class SearchTypesValueConverter {
 toView(array, obj) {
        
        if (obj == "") {
            return array;
        } else if (obj) {
            let filteredArr = array.filter(x => x.DisplayName.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
            return filteredArr;
        }
        return array;
    }
}
export class SearchProductionValueConverter {
 toView(array, obj) {
        
        if (obj == "") {
            return array;
        } else if (obj) {
            let filteredArr = array.filter(x => x.Name.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
            return filteredArr;
        }
        return array;
    }
}


export class SearchNameValueConverter {
  toView(array, obj) {
        
        if (obj == "") {
            return array;
        } else if (obj) {
            let filteredArr = array.filter(x => x.Name.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
            return filteredArr;
        }
        return array;
    }
}