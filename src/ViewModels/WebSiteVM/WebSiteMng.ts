import {
  inject,
  BindingEngine
} from 'aurelia-framework';
//import * as toastr from 'toastr';
import {
  WebSiteServices
} from '../../services/WebSite/WebSiteServices';
import {
  DialogService
} from 'aurelia-dialog';
import * as _ from 'lodash';
import * as swal  from 'sweetalert'
import {
  CreateWebDlg
} from '../../resources/ui/Dialog/CreateWebDlg';
import {
  DetailWebDlg
} from '../../resources/ui/Dialog/DetailWebDlg';

import {
  DetailWebUsersDlg
} from '../../resources/ui/Dialog/DetailWebUsersDlg'; 

import {
  WebSite
} from '../../models//website';

import * as Lockr from 'lockr';
declare let $: any;
 

@inject(WebSiteServices, BindingEngine, DialogService)
export class WebSiteMng {
  pageSize: number = 10
  total: number = 0
  current: number
  allPage: number
  webSiteServices: WebSiteServices;
  listWebSite: any;
   Web: any;
  bindingEngine: BindingEngine;
  dialogService: DialogService
  pendding: boolean
  constructor(webSiteServices, bindingEngine, dialogService) {
    this.webSiteServices = webSiteServices;
    this.current = 1;
    this.total = 0
    this.dialogService = dialogService;

    this.pendding = true

  }
  activate() {
    this.pendding = !this.pendding;
    // console.log('show', this.pendding)
    this.webSiteServices.GetListWebSite().then(rs => {
        //console.log('result', JSON.stringify((rs as any).data))
        if ((rs as any).status == 200) {
          this.pendding = !this.pendding;
          // console.log('(rs[0] as any).Result',(rs[0] as any).Results)
          this.listWebSite = (rs as any).data;
          this.total = (rs as any).data.length;

          this.allPage = Math.ceil(this.total / this.pageSize)
            //  console.log('this.allPage', this.allPage);
        } else {
          console.log('bad');
        }

      }

    );
  }
  confirmWebsite(item)
  {
   
    swal({
      title: "You sure ?",
      text: "Confirm Website source repositories github",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Confirm",
      cancelButtonText: "No, Back To",
      closeOnConfirm: false,
      closeOnCancel: false
    }, (isConfirm) => {
      if (isConfirm) {
        this.webSiteServices.ConfirmWebSite(item.WebsiteId)
          .then(rs => {
            swal("Confirm!", `Confirm Website source repositories github`, "success");
            this.activate();
          }).catch(err=>{
                //console.log('err',err)
               
               swal("Confirm!",err.response.data.Message, "error");
                
              
          })

      } else {
        swal("Cancelled", "Cancelled", "error");
      }
    });

  }
  
  detailWebsite(item) {
      
       this.dialogService.open({
        viewModel: DetailWebDlg,model:item
      }).then((result) => {
        if (!result.wasCancelled) {
         // console.log('result.output', result.output);
          this.webSiteServices.CreateWeb(result.output).then((rs: any) => {
          
          }).catch(err=>{
          
            
            
          })

        } else {
          console.log('bad');
        }

      });


  }

detailWebsiteUser(item) {
      
       this.dialogService.open({
        viewModel: DetailWebUsersDlg,model:item
      }).then((result) => {
        if (!result.wasCancelled) {
          console.log('result.output', result.output);
            } else {
          console.log('bad');
        }

      });


  }


  createWeb() {
      this.dialogService.open({
        viewModel: CreateWebDlg
      }).then((result) => {
        if (!result.wasCancelled) {
         // console.log('result.output', result.output);
          this.webSiteServices.CreateWeb(result.output).then((rs: any) => {
              swal({
                title: "Notification",
                text: "Create success",
                timer: 2500,
                showConfirmButton: true,
                type: "success"
              });
              this.activate();
            }).catch(err=>{
          
              swal({
                title: "Notification",
                text: "Create error",
                timer: 2500,
                showConfirmButton: true,
                type: "warning"
              });
            
          })

        } else {
          console.log('bad');
        }

      });


    }
   

}




export class SearchNameValueConverter {
    toView(array, obj) {

        if (obj == "") {
            return array;
        } else if (obj) {
            let filteredArr = array.filter(x => x.Name && x.Name.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

            return filteredArr;
        }
        return array;
    }
}
export class SearchDisplayNameValueConverter {
    toView(array, obj) {

        if (obj == "") {
            return array;
        } else if (obj) {
            let filteredArr = array.filter(x => x.DisplayName && x.DisplayName.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

            return filteredArr;
        }
        return array;
    }
}