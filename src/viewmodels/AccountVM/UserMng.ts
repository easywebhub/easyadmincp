import { inject, BindingEngine } from 'aurelia-framework';
//import * as toastr from 'toastr';
import { UserServices } from '../../services/Account/UserServices';
import * as _ from 'lodash';
import { DialogService } from 'aurelia-dialog';

import { CreateDlg } from './CreateDlg';
import { User} from '../../models//user';
@inject(UserServices, BindingEngine,DialogService)
export class UserMng {
    userServices: UserServices;
    listUser:any;
    //listSchool: any;
    total: number;

    itemperpage: number;
    current: number;
    pagesize: number;
    bindingEngine: BindingEngine;
    pendding:boolean=true
    dialogService:DialogService
    constructor(userServices, bindingEngine,dialogService) {
        this.userServices = userServices;

        this.itemperpage = 10;
        this.pagesize = 6;
        this.current = 1;
        this.total=0
        this.dialogService=dialogService
    }
   
    activate() {
        this.pendding=!this.pendding;
        this.userServices.GetListUser().then(rs => {
           
                this.pendding=!this.pendding;
                this.listUser = (rs as any);
                this.total = (rs as any).length;

                //console.log('listUser', (rs[0] as any));
           
        }).catch(err=>{
             console.log('bad',err)
        })
    }

    createUser() {

        this.dialogService.open({ viewModel: CreateDlg}).then((result) => {
            if (!result.wasCancelled) {
                console.log('result.output',result.output);


                this.userServices.CreateUser(new User(result.output)).then((rs: any) => {
                    console.log('status',rs)
                   if (rs.status == 200) {

                        swal({ title: "Thông báo", text:"Tạo mới thành công", timer: 2500, showConfirmButton: true, type: "success" });
                     
                        this.activate();
                    }
                    else {
                         swal({ title: "Thông báo",text:"Tạo mới thất bại" , timer: 2500, showConfirmButton: true,type: "warning" });
                    }
                });

            } else {
                console.log('bad');
            }

        });
    }



}
export class SearchUserNameValueConverter {
 toView(array, obj) {
        
        if (obj == "") {
            return array;
        } else if (obj) {
            console.log('test',obj.toLowerCase())
            let filteredArr = array.filter(x => x.UserName.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
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
            let filteredArr = array.filter(x => x.Info.Name.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
            return filteredArr;
        }
        return array;
    }
}