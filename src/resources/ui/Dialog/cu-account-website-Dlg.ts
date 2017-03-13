import {
  DialogController
} from 'aurelia-dialog';

import {
  inject
} from 'aurelia-dependency-injection';

import {
  ValidationControllerFactory,ValidationRules

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';

import {
  ModelWeb
} from '../../../models/user';
import {
  AccessLevels,WebsiteTypes
} from '../../../resources/helpers/enum';
import {
  WebSiteServices
} from '../../../services/WebSite/WebSiteServices';
import * as $
from 'jquery';
import * as _
from 'lodash';
@inject(WebSiteServices,DialogController,ValidationControllerFactory)

export class CUAccountWebsiteDlg {
  dialogController: DialogController;
  item :ModelWeb;
  controller: any;
  accessLevels=AccessLevels;
  websiteTypes=WebsiteTypes;
  clssServer:WebSiteServices;
  listWeb:any;
  check:boolean=false;
  pending:boolean=false;
  constructor(webSiteServices,dialogController,controllerFactory) {
    
    this.dialogController = dialogController;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
    this.clssServer=webSiteServices;
  
  }
async activate(params) {
   //  console.log("11111",params);
     if(params.WebsiteId!='0')
      {
        this.check=true;
      }
     
     await this.clssServer.GetListWebSite().then(rs=>{
         setTimeout(()=>{this.pending=true;},1000)
           
          this.listWeb=(rs as any).data;
          this.item =params;
     
      })
         

   }
  submit() {
  //  console.log('valid',this.controller)
    this.controller.validate().then(rs => {
    
      if (rs.valid == true)
      {
         if ($.isArray(this.item.AccessLevels)) {
             this.dialogController.ok(this.item);
        } else {
          //console.log('@@@@@@@',JSON.stringify(this.item.AccessLevels))
          let tmp = this.item.AccessLevels.split(",");
          this.item.AccessLevels = this.item.AccessLevels ? tmp : [];
           this.dialogController.ok(this.item);
        }
       
      } else
        console.log('error')

    });
  }
  //  get title() {
  //   if (this.check==false) {
  //       return 'NEW';
      
  //   }
  //   else
  //    return `Update`;
     
    
  // }
  
}
