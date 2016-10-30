import { inject, BindingEngine } from 'aurelia-framework';
//import * as toastr from 'toastr';
import { UserServices } from '../../services/Account/UserServices';
import * as _ from 'lodash';
@inject(UserServices, BindingEngine)
export class UserMng {
    userServices: UserServices;
    listUser:any;
    //listSchool: any;
    total: number;

    itemperpage: number;
    current: number;
    pagesize: number;
    bindingEngine: BindingEngine;

    constructor(userServices, bindingEngine) {
        this.userServices = userServices;

        this.itemperpage = 10;
        this.pagesize = 6;
        this.current = 1;
        this.total=0

    }
    activate() {
        return Promise.all([this.userServices.GetListUser()]).then(rs => {
            this.listUser = (rs[0] as any).Data;
            this.total = this.listUser.length;
             console.log('listUser',this.total);
            console.log('listUser',this.listUser[0].Websites);
        });
    }

    


}
export class SearchUserNameValueConverter {
 toView(array, obj) {
        
        if (obj == "") {
            return array;
        } else if (obj) {
            let filteredArr = array.filter(x => x.UserName.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
            return filteredArr;
        }
        return array;
    }
}
export class SearchAccountTypeValueConverter {
 toView(array, obj) {
        
        if (obj == "") {
            return array;
        } else if (obj) {
            let filteredArr = array.filter(x => x.AccountType.toLowerCase().indexOf(obj.toLowerCase()) != -1);
        
            return filteredArr;
        }
        return array;
    }
}

