import { inject, BindingEngine } from 'aurelia-framework';
//import * as toastr from 'toastr';
import { WebSiteServices } from '../../services/WebSite/WebSiteServices';
import * as _ from 'lodash';
@inject(WebSiteServices, BindingEngine)
export class WebSiteMng {
    webSiteServices: WebSiteServices;
    listWebSite: any;
    //listSchool: any;
    total: number;

    itemperpage: number;
    current: number;
    pagesize: number;
    bindingEngine: BindingEngine;

    constructor(webSiteServices, bindingEngine) {
        this.webSiteServices = webSiteServices;

        this.itemperpage = 10;
        this.pagesize = 6;
        this.current = 1;
        this.total=0

    }
    activate() {

        return Promise.all([this.webSiteServices.GetListWebSite()]).then(rs => {

            this.listWebSite = (rs[0] as any).Data;
            console.log('listWebSite',this.listWebSite);

            this.total = this.listWebSite.length;


        }

        );
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