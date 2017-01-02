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
import {
  CreateWebDlg
} from '../../resources/ui/Dialog/CreateWebDlg';
import {
  DetailWebDlg
} from './DetailWebDlg';

import {
  RoleWebDlg
} from './RoleWebDlg'; 
import {
  CreateWeb,
  CreateRoleWeb
} from '../../models//website';

import * as Lockr from 'lockr';

declare let $: any;
@inject(WebSiteServices, BindingEngine, DialogService)
export class WebSiteMng {
  pageSize: number = 5
  total: number = 0
  current: number
  allPage: number
  webSiteServices: WebSiteServices;
  listWebSite: any;
  //listSchool: any;

  Web: any;
  itemperpage: number;

  pagesize: number;
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
       // console.log('result', JSON.stringify((rs as any).data))
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
  detailRoleWeb(item) {
    this.dialogService.open({
      viewModel: DetailWebDlg,

      model: item
    }).then((result) => {

      if (!result.wasCancelled) {
        console.log('result output', JSON.stringify(new CreateRoleWeb(result.output)));




      } else {
        console.log('bad');
      }

    });

  }

  // attached() {
  //  var rules = {
  //     Name: {
  //       identifier: 'Name',
  //       rules: [{
  //         type: 'empty',
  //         prompt: 'Xin vui lòng nhập tên vào'
  //       }]
  //     },
  //     PasswoDisplayName: {
  //       identifier: 'DisplayName',
  //       rules: [{
  //         type: 'empty',
  //         prompt: 'Xin vui lòng nhập DisplayName'
  //       }]
  //     },
  //     Link: {
  //       identifier: 'Url',
  //       rules: [{
  //         type: 'empty',
  //         prompt: 'Xin vui lòng nhập Link'
  //       }]
  //     }


  //   };
  //   ($(".ui.form") as any).form(rules, {
  //     inline: true,
  //     on: 'blur'
  //   });


  // }
  createWeb(){

    
   
     this.dialogService.open({ viewModel: CreateWebDlg}).then((result) => {
      if (!result.wasCancelled) {
         console.log('result.output',result.output);


          this.webSiteServices.CreateWeb(new CreateWeb(result.output)).then((rs: any) => {
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
  // createWeb() {
  //  // $('form').form('clear')
  //     // $('.ui.form').find('.error').removeClass('error')
  //   $('.modal').modal('show');
  //   //  this.attached()
  // };
  // this.dialogService.open({ viewModel: CreateWebDlg}).then((result) => {
  //     if (!result.wasCancelled) {
  //         console.log('result.output',result.output);


  //         // this.webSiteServices.CreateWeb(new CreateWeb(result.output)).then((rs: any) => {
  //         //    if (rs.status == 200) {

  //         //         swal({ title: "Thông báo", text:"Tạo mới thành công", timer: 2500, showConfirmButton: true, type: "success" });

  //         //         this.activate();
  //         //     }
  //         //     else {
  //         //          swal({ title: "Thông báo",text:"Tạo mới thất bại" , timer: 2500, showConfirmButton: true,type: "warning" });
  //         //     }
  //         // });

  //     } else {
  //         console.log('bad');
  //     }

  // });
  // }



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
