import {
  WebSiteServices
} from '../../services/WebSite/WebSiteServices';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  ModelWeb
} from '../../models//model-web';
import {
  ValidationControllerFactory, ValidationRules

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../resources/validation/semantic-form-renderer';
import * as swal from 'sweetalert'
@inject(WebSiteServices, ValidationControllerFactory)
export class Services {

  clssServives: WebSiteServices;
  controller: any;
  constructor(UserServices, controllerFactory) {
    this.clssServives = UserServices;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
  }
  getPage() {
    return this.clssServives.GetListWebSite().then(rs => {
    //  console.log('data', (rs as any).data)
      return {
        entities: (rs as any).data,
        pageSize: 20,
        total: (rs as any).data.length,
        current: 1,
        allPage: Math.ceil((rs as any).data.length / 20)
      }
    })

  }

  loadExisting(id) {
    console.log('id',id)
    return this.clssServives.DetailWebSite(id)
      .then(rs => {
       // console.log('####',JSON.stringify(rs))
      //  console.log('@@@@',new ModelWeb((rs as any).data))
        return {
          entity: new ModelWeb((rs as any).data)

        };
      });
  }

  createPromise() {
    return new Promise((resolve, reject) => {
      resolve(new ModelWeb({}))
    })
  }
  createNew() {
    return this.createPromise().then(rs => {
     // console.log('new', rs)
      return {
        entity: rs
      }
    })

  }
  saveServices(meta){
    if(meta.WebsiteId==0)
     {
        this.clssServives.CreateWebFull(meta).then(rs=>{
            swal({
            title: "Notification",
            text: "Create Website success",
            timer: 2500,
            showConfirmButton: true,
            type: "success"
          });
        }).catch(error=>{
             swal({
            title: "Notification",
            text: error,
            timer: 2500,
            showConfirmButton: true,
            type: "warning"
          }); 
        })
     }
     else
     
     {
        this.clssServives.UpdateWebFull(meta).then(rs=>{
            swal({
            title: "Notification",
            text: "Update Website success",
            timer: 2500,
            showConfirmButton: true,
            type: "success"
          });
        }).catch(error=>{
         //console.log('error',error.Message)
             swal({
            title: "Notification",
            text: error,
            timer: 2500,
            showConfirmButton: true,
            type: "warning"
          }); 
        })
     }
  }

}
