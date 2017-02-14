
import {EntityViewModel} from '../../models//entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {Services} from './services';
import {
  ModelWeb
} from '../../models/model-web';
import {
  WebsiteTypes
} from '../../resources/helpers/enum';
@inject(Services)
export class Website extends EntityViewModel {
 entity:ModelWeb;
 websiteTypes=WebsiteTypes;
  constructor(service) {
    super(service);
  //  this.entity=new ModelWeb(this.entity)
    console.log('@@@',this.entity)
   
     
}
  get title() {
    if (this.entity.WebsiteId) {
      return `Website #${this.entity.WebsiteId}`;
     
    }
    else
      return 'NEW Website';
    
  }
 
}