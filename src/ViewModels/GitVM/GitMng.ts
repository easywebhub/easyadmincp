import {
  inject,
  BindingEngine
} from 'aurelia-framework';
//import * as toastr from 'toastr';
import {
  GithubServices
} from '../../services/Github/GithubServices';
import {
  DialogService
} from 'aurelia-dialog';

import * as swal from 'sweetalert'




import {
  Git
} from '../../models//git';

import * as Lockr from 'lockr';
declare let $: any;


@inject(GithubServices, BindingEngine, DialogService)
export class GitMng {
  pageSize: number = 10
  total: number = 0
  current: number
  allPage: number
  svClass: GithubServices;
  listGithub: any;
  bindingEngine: BindingEngine;
  dialogService: DialogService
  pendding: boolean
  constructor(githubServices, bindingEngine, dialogService) {
    this.svClass = githubServices;
    this.current = 1;
    this.total = 0
    this.dialogService = dialogService;

    this.pendding = true

  }
  activate() {
   // this.pendding = !this.pendding;
    // console.log('show', this.pendding)
    // this.svClass.GetListGithub().then(rs => {
    //     //console.log('result', JSON.stringify((rs as any).data))
    //     if ((rs as any).status == 200) {
    //       this.pendding = !this.pendding;
    //       // console.log('(rs[0] as any).Result',(rs[0] as any).Results)
    //       this.listGithub = (rs as any).data;
    //       this.total = (rs as any).data.length;

    //       this.allPage = Math.ceil(this.total / this.pageSize)
    //         //  console.log('this.allPage', this.allPage);
    //     } else {
    //       console.log('bad');
    //     }

    //   }

    // );
  }
  detailGithub(item) {

    // this.dialogService.open({
    //   viewModel: DetailWebDlg,
    //   model: item
    // }).then((result) => {
    //   if (!result.wasCancelled) {
    //     // console.log('result.output', result.output);
    //     // this.listGithub.CreateWeb(result.output).then((rs: any) => {

    //     // }).catch(err=>{



    //     // })

    //   } else {
    //     console.log('bad');
    //   }

    // });


  }



  createGit() {
    // this.dialogService.open({
    //   viewModel: CreateWebDlg
    // }).then((result) => {
    //   if (!result.wasCancelled) {
    //     // console.log('result.output', result.output);
    //     this.svClass.CreateGithub(result.output).then((rs: any) => {


    //       swal({
    //         title: "Thông báo",
    //         text: "Tạo mới thành công",
    //         timer: 2500,
    //         showConfirmButton: true,
    //         type: "success"
    //       });

    //       this.activate();

    //     }).catch(err => {

    //       swal({
    //         title: "Thông báo",
    //         text: "Tạo mới thất bại",
    //         timer: 2500,
    //         showConfirmButton: true,
    //         type: "warning"
    //       });

    //     })

    //   } else {
    //     console.log('bad');
    //   }

    // });


  }


}


// export class NameByValueConverter {
//   toView(array, obj) {

//         if (obj == "") {
//             return array;
//         } else if (obj) {
//             // let filteredArr = array.filter(function(x){
//             //     console.log('xx',x.Name)
//             // });
//            // let filteredArr=_.find(array, function(o) { console.log('obj',(o as any).Name); return (o as any).Name==obj });

//            return array => array
//     .filter(array => array.Name  == obj)

//         }
//         return array;
//     }
// }


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
