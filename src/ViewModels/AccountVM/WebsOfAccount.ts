import {
  DialogController
} from 'aurelia-dialog';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  ValidationControllerFactory

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../resources/validation/semantic-form-renderer';

import {
  UserServices
} from '../../services/Account/UserServices';
import * as swal from 'sweetalert'
import {
  DialogService
} from 'aurelia-dialog';
import {
  CreatePerAccountForWebDlg
} from '../../resources/ui/Dialog/CreatePerAccountForWebDlg';

import {
  UpdatePerAccountForWebDlg
} from '../../resources/ui/Dialog/UpdatePerAccountForWebDlg';
import {
  Accounts
} from '../../models//website';
@inject(DialogController, ValidationControllerFactory, UserServices,DialogService)

export class WebsOfAccount {
  dialogController: DialogController;
 
  controller: any
  clSevice: UserServices
  webSAccount: any
  pageSize: number = 10
  total: number = 0
  current: number = 1
  allPage: number = 1
  params:any

 dialogService:DialogService
 meta:any={}
  constructor(dialogController, controllerFactory, userServices,dialogService) {
    this.dialogController = dialogController
    
   
    this.clSevice = userServices
    this.dialogService=dialogService
  }
 async activate(params) {
    
    this.params=params
   // console.log('pẩ',params)

    await this.clSevice.AllWebsiteOfUser(params.AccountId).then(rs => {

      this.webSAccount = (rs as any).data
      this.total = (rs as any).data.length;

      this.allPage = Math.ceil(this.total / this.pageSize)
      console.log('webSAccount', (rs as any).data)
    })
  }



 
  createAccount(item) {
    item.AccountId=this.params.AccountId;
   // console.log('item create',JSON.stringify(item))
    
       this.dialogService.open({
      viewModel: CreatePerAccountForWebDlg,
      model:item
    }).then((result) => {
      if (!result.wasCancelled) {
        this.clSevice.CreatePermisSionUserOnWebsite(result.output).then(rs=>{
                this.activate(this.params)
               swal("Notification", `Create new Account for a Website`, "success");
               
        }).catch(err=>{
             swal("Notification", `Error create new Account for a Website`, "warning");
        })
        

      } else {
        console.log('bad');
      }

    });
  }
  updateAccount(item) {
       item.AccountId=this.params.AccountId;
       this.dialogService.open({
      viewModel: UpdatePerAccountForWebDlg,
      model:item
    }).then((result) => {
      if (!result.wasCancelled) {
        this.clSevice.UpdatePermisSionUserOnWebsite(result.output).then(rs=>{
                this.activate(this.params)
                swal({
            title: "Notification",
            text: "Update Permission Account for a Website success",
            timer: 2500,
            showConfirmButton: true,
            type: "success"
          });
             
                
        }).catch(err=>{
            swal({
            title: "Notification",
            text: "Update Permission Account for a Website fail",
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
  deleteAccount(item) {
    swal({
      title: "Are you sure?",
      text: "Delete Permission Admin website of Account",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "No, Back To",
      closeOnConfirm: false,
      closeOnCancel: false
    }, (isConfirm) => {
      if (isConfirm) {
        this.clSevice.DeleteOneWebsiteOfUser(this.params.AccountId,item.WebsiteId)
          .then(rs => {
            swal("Deleted!", `Delete Permission Admin website of Account`, "success");
            this.activate(this.params);
          })

      } else {
        swal("Cancelled", "Cancelled", "error");
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
