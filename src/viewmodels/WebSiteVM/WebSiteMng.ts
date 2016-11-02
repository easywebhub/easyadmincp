import { inject, BindingEngine } from 'aurelia-framework';
//import * as toastr from 'toastr';
import { WebSiteServices } from '../../services/WebSite/WebSiteServices';
import { DialogService } from 'aurelia-dialog';
import * as _ from 'lodash';
import { CreateWebDlg } from './CreateWebDlg';
import { CreateWeb } from '../../models//website';

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
    constructor(webSiteServices, bindingEngine,dialogService) {
        this.webSiteServices = webSiteServices;

        this.itemperpage = 10;
        this.pagesize = 6;
        this.current = 1;
        this.total=0
        this.dialogService=dialogService;

    }
    activate() {

        return Promise.all([this.webSiteServices.GetListWebSite()]).then(rs => {

            this.listWebSite = (rs[0] as any).Data;
            console.log('listWebSite',this.listWebSite);

            this.total = this.listWebSite.length;


        }

        );
    }
    createWeb() {

        this.dialogService.open({ viewModel: CreateWebDlg}).then((result) => {
            if (!result.wasCancelled) {
                console.log('result.output',result.output);


                this.webSiteServices.CreateWeb(new CreateWeb(result.output)).then((rs: any) => {
                   if (rs.Result == true) {

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
            let filteredArr = array.filter(x => x.Type.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
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
            let filteredArr = array.filter(x => x.Production.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
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