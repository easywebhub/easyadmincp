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
} from '../../../resources/validation/semantic-form-renderer';
import {
  Accounts
} from '../../../models//website';
import {
  UserServices
} from '../../../services/Account/UserServices';
import * as swal from 'sweetalert'
import {
  DialogService
} from 'aurelia-dialog';

import {
  CreatePerAccountForWebDlg
} from './CreatePerAccountForWebDlg';
import {
  UpdatePerAccountForWebDlg
} from './UpdatePerAccountForWebDlg';
@inject(DialogController, ValidationControllerFactory, UserServices,DialogService)

export class WebsOfAccountDlg {
  dialogController: DialogController;
  meta: Accounts;
  controller: any
  clSevice: UserServices
  webSAccount: any
  pageSize: number = 10
  total: number = 0
  current: number = 1
  allPage: number = 1
  params:any
  
 dialogService:DialogService
  constructor(dialogController, controllerFactory, userServices,dialogService) {
    this.dialogController = dialogController
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
    this.clSevice = userServices
    this.dialogService=dialogService
  }
  async activate(params) {
    
    this.params = params
    this.meta=new Accounts(this.params)
     console.log('this.meta',this.meta)
    await this.clSevice.AllWebsiteOfUser(this.params.AccountId).then(rs => {
      this.webSAccount = (rs as any).data
      this.total = (rs as any).data.length;

      this.allPage = Math.ceil(this.total / this.pageSize)
      // console.log('webSAccount', (rs as any).data)
    })
  }


  submit() {

    //console.log('meta',JSON.stringify(this.meta))
    //this.dialogController.ok(this.meta);
  }
 
 
  createAccount(item) {
    this.meta.WebsiteId=item.WebsiteId
       this.dialogService.open({
      viewModel: CreatePerAccountForWebDlg,
      model:this.meta
    }).then((result) => {
      if (!result.wasCancelled) {
        this.clSevice.CreatePermisSionUserOnWebsite(result.output).then(rs=>{
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
       this.meta.WebsiteId=item.WebsiteId
       this.dialogService.open({
      viewModel: UpdatePerAccountForWebDlg,
      model:this.meta
    }).then((result) => {
      if (!result.wasCancelled) {
        this.clSevice.UpdatePermisSionUserOnWebsite(result.output).then(rs=>{
               swal("Notification", `Update Account for a Website`, "success");
        }).catch(err=>{
             swal("Notification", `Error update Account for a Website`, "warning");
        })
        

      } else {
        console.log('bad');
      }

    });
  }
  deleteAccount(item) {
    swal({
      title: "Bạn chắc chắn không?",
      text: "Xóa quyền quản trị website của tài khoản",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Xóa",
      cancelButtonText: "No, Quay lại",
      closeOnConfirm: false,
      closeOnCancel: false
    }, (isConfirm) => {
      if (isConfirm) {
        this.clSevice.DeleteOneWebsiteOfUser(this.params.AccountId, item.WebsiteId)
          .then(rs => {
            swal("Deleted!", `Xóa quyền quản trị website của tài khoản`, "success");
            this.activate(this.params);
          })

      } else {
        swal("Cancelled", "Cancelled", "error");
      }
    });

  }


}
